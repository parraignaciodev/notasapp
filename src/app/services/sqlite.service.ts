import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';

/**
 * Servicio SQLite compatible con distintas versiones de @capacitor-community/sqlite.
 * - Evita removeAllConnections (no existe en algunas versiones)
 * - Soporta createConnection con firma vieja (params sueltos) o nueva (objeto)
 */
@Injectable({ providedIn: 'root' })
export class SqliteService {
  private db: SQLiteDBConnection | null = null;
  // lo tratamos como any para tolerar diferencias de API entre versiones
  private sqlite: any = CapacitorSQLite as any;

  get isNative(): boolean {
    const p = Capacitor.getPlatform();
    return p === 'android' || p === 'ios';
  }

  /** Llama esto al iniciar la app (ej: en app.component.ts o al entrar a Home protegida) */
  async init(): Promise<void> {
    if (!this.isNative) {
      // En web puedes usar Ionic Storage / IndexedDB; SQLite nativo no aplica
      return;
    }

    // 1) Chequeo de consistencia (algunas versiones no requieren args)
    try {
      if (this.sqlite?.checkConnectionsConsistency) {
        if (this.sqlite.checkConnectionsConsistency.length === 0) {
          await this.sqlite.checkConnectionsConsistency();
        } else {
          await this.sqlite.checkConnectionsConsistency({
            dbNames: ['notasdb'],
            openModes: ['no-encryption'],
          });
        }
      }
    } catch {
      // ignoramos diferencias de implementación
    }

    // 2) Cerrar conexiones abiertas (si existe el método)
    try {
      if (this.sqlite?.closeAllConnections) {
        await this.sqlite.closeAllConnections();
      }
    } catch {
      // en versiones sin closeAllConnections no pasa nada
    }

    // 3) Crear conexión (firma vieja o nueva)
    if (this.sqlite?.createConnection) {
      if (this.usesOldCreateSignature()) {
        // Firma vieja (nombre, encrypted, mode, version, readonly)
        this.db = await this.sqlite.createConnection(
          'notasdb',
          false,
          'no-encryption',
          1,
          false
        );
      } else {
        // Firma nueva (objeto config)
        this.db = await this.sqlite.createConnection({
          database: 'notasdb',
          version: 1,
          encrypted: false,
          mode: 'no-encryption',
          readonly: false,
        });
      }
    } else {
      throw new Error('CapacitorSQLite.createConnection no está disponible');
    }

    // 4) Abrir DB y crear tabla
    await this.db!.open();
    await this.db!.execute(`
      CREATE TABLE IF NOT EXISTS notes(
        id INTEGER PRIMARY KEY NOT NULL,
        titulo TEXT NOT NULL,
        descripcion TEXT,
        color TEXT,
        createdAt TEXT,
        updatedAt TEXT,
        completada INTEGER DEFAULT 0
      );
    `);
  }

  /** Inserta una nota */
  async create(note: {
    id: number;
    titulo: string;
    descripcion?: string;
    color?: string;
    createdAt: string;
    updatedAt: string;
    completada?: boolean;
  }): Promise<number> {
    this.assertDB();
    const res = await this.db!.run(
      `INSERT INTO notes (id, titulo, descripcion, color, createdAt, updatedAt, completada)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        note.id,
        note.titulo,
        note.descripcion ?? '',
        note.color ?? 'gray',
        note.createdAt,
        note.updatedAt,
        note.completada ? 1 : 0,
      ]
    );
    return this.extractChanges(res);
  }

  /** Actualiza una nota */
  async update(note: {
    id: number;
    titulo: string;
    descripcion?: string;
    color?: string;
    updatedAt: string;
    completada?: boolean;
  }): Promise<number> {
    this.assertDB();
    const res = await this.db!.run(
      `UPDATE notes
         SET titulo=?, descripcion=?, color=?, updatedAt=?, completada=?
       WHERE id=?`,
      [
        note.titulo,
        note.descripcion ?? '',
        note.color ?? 'gray',
        note.updatedAt,
        note.completada ? 1 : 0,
        note.id,
      ]
    );
    return this.extractChanges(res);
  }

  /** Elimina por id */
  async delete(id: number): Promise<number> {
    this.assertDB();
    const res = await this.db!.run(`DELETE FROM notes WHERE id=?`, [id]);
    return this.extractChanges(res);
  }

  /** Lista todas las notas (orden por updatedAt desc) */
  async list(): Promise<any[]> {
    this.assertDB();
    const res = await this.db!.query(
      `SELECT * FROM notes ORDER BY datetime(updatedAt) DESC`
    );
    return res.values ?? [];
  }

  /** Obtiene una nota por id */
  async get(id: number): Promise<any | null> {
    this.assertDB();
    const res = await this.db!.query(`SELECT * FROM notes WHERE id=?`, [id]);
    return (res.values ?? [])[0] ?? null;
  }

  /** Cierra conexión (opcional) */
  async close(): Promise<void> {
    if (!this.db) return;
    try {
      await this.db.close();
    } catch {}
    this.db = null;
  }

  // ----------------- helpers privados -----------------

  /** Detecta si la firma de createConnection es la antigua (5 params) */
  private usesOldCreateSignature(): boolean {
    try {
      // Heurística: en versiones antiguas length === 5
      return typeof this.sqlite.createConnection === 'function'
        && this.sqlite.createConnection.length >= 5;
    } catch {
      return false;
    }
  }

  private assertDB(): void {
    if (!this.db) {
      throw new Error('SQLite DB no inicializada. Llama primero a init()');
    }
  }

  /** Normaliza la respuesta de .run() entre versiones */
  private extractChanges(res: any): number {
    // Algunas versiones retornan { changes: { changes: n } }, otras { changes: n }
    if (!res) return 0;
    if (typeof res.changes === 'number') return res.changes;
    if (res.changes && typeof res.changes.changes === 'number')
      return res.changes.changes;
    return 0;
  }
}
