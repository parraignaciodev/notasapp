import {
  Capacitor,
  init_dist,
  registerPlugin
} from "./chunk-EIMUG3PL.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-GKFQG4U6.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@capacitor-community/sqlite/dist/esm/definitions.js
var init_definitions = __esm({
  "node_modules/@capacitor-community/sqlite/dist/esm/definitions.js"() {
    "use strict";
  }
});

// node_modules/@capacitor-community/sqlite/dist/esm/index.js
var CapacitorSQLite;
var init_esm = __esm({
  "node_modules/@capacitor-community/sqlite/dist/esm/index.js"() {
    "use strict";
    init_dist();
    init_definitions();
    CapacitorSQLite = registerPlugin("CapacitorSQLite", {
      web: () => import("./chunk-5E2JO7UL.js").then((m) => new m.CapacitorSQLiteWeb()),
      electron: () => window.CapacitorCustomPlatform.plugins.CapacitorSQLite
    });
  }
});

// src/app/services/sqlite.service.ts
var SqliteService;
var init_sqlite_service = __esm({
  "src/app/services/sqlite.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_dist();
    init_esm();
    SqliteService = class SqliteService2 {
      constructor() {
        this.db = null;
        this.sqlite = CapacitorSQLite;
      }
      get isNative() {
        const p = Capacitor.getPlatform();
        return p === "android" || p === "ios";
      }
      /** Llama esto al iniciar la app (ej: en app.component.ts o al entrar a Home protegida) */
      init() {
        return __async(this, null, function* () {
          if (!this.isNative) {
            return;
          }
          try {
            if (this.sqlite?.checkConnectionsConsistency) {
              if (this.sqlite.checkConnectionsConsistency.length === 0) {
                yield this.sqlite.checkConnectionsConsistency();
              } else {
                yield this.sqlite.checkConnectionsConsistency({
                  dbNames: ["notasdb"],
                  openModes: ["no-encryption"]
                });
              }
            }
          } catch {
          }
          try {
            if (this.sqlite?.closeAllConnections) {
              yield this.sqlite.closeAllConnections();
            }
          } catch {
          }
          if (this.sqlite?.createConnection) {
            if (this.usesOldCreateSignature()) {
              this.db = yield this.sqlite.createConnection("notasdb", false, "no-encryption", 1, false);
            } else {
              this.db = yield this.sqlite.createConnection({
                database: "notasdb",
                version: 1,
                encrypted: false,
                mode: "no-encryption",
                readonly: false
              });
            }
          } else {
            throw new Error("CapacitorSQLite.createConnection no est\xE1 disponible");
          }
          yield this.db.open();
          yield this.db.execute(`
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
        });
      }
      /** Inserta una nota */
      create(note) {
        return __async(this, null, function* () {
          this.assertDB();
          const res = yield this.db.run(`INSERT INTO notes (id, titulo, descripcion, color, createdAt, updatedAt, completada)
       VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            note.id,
            note.titulo,
            note.descripcion ?? "",
            note.color ?? "gray",
            note.createdAt,
            note.updatedAt,
            note.completada ? 1 : 0
          ]);
          return this.extractChanges(res);
        });
      }
      /** Actualiza una nota */
      update(note) {
        return __async(this, null, function* () {
          this.assertDB();
          const res = yield this.db.run(`UPDATE notes
         SET titulo=?, descripcion=?, color=?, updatedAt=?, completada=?
       WHERE id=?`, [
            note.titulo,
            note.descripcion ?? "",
            note.color ?? "gray",
            note.updatedAt,
            note.completada ? 1 : 0,
            note.id
          ]);
          return this.extractChanges(res);
        });
      }
      /** Elimina por id */
      delete(id) {
        return __async(this, null, function* () {
          this.assertDB();
          const res = yield this.db.run(`DELETE FROM notes WHERE id=?`, [id]);
          return this.extractChanges(res);
        });
      }
      /** Lista todas las notas (orden por updatedAt desc) */
      list() {
        return __async(this, null, function* () {
          this.assertDB();
          const res = yield this.db.query(`SELECT * FROM notes ORDER BY datetime(updatedAt) DESC`);
          return res.values ?? [];
        });
      }
      /** Obtiene una nota por id */
      get(id) {
        return __async(this, null, function* () {
          this.assertDB();
          const res = yield this.db.query(`SELECT * FROM notes WHERE id=?`, [id]);
          return (res.values ?? [])[0] ?? null;
        });
      }
      /** Cierra conexión (opcional) */
      close() {
        return __async(this, null, function* () {
          if (!this.db)
            return;
          try {
            yield this.db.close();
          } catch {
          }
          this.db = null;
        });
      }
      // ----------------- helpers privados -----------------
      /** Detecta si la firma de createConnection es la antigua (5 params) */
      usesOldCreateSignature() {
        try {
          return typeof this.sqlite.createConnection === "function" && this.sqlite.createConnection.length >= 5;
        } catch {
          return false;
        }
      }
      assertDB() {
        if (!this.db) {
          throw new Error("SQLite DB no inicializada. Llama primero a init()");
        }
      }
      /** Normaliza la respuesta de .run() entre versiones */
      extractChanges(res) {
        if (!res)
          return 0;
        if (typeof res.changes === "number")
          return res.changes;
        if (res.changes && typeof res.changes.changes === "number")
          return res.changes.changes;
        return 0;
      }
    };
    SqliteService = __decorate([
      Injectable({ providedIn: "root" })
    ], SqliteService);
  }
});

export {
  SqliteService,
  init_sqlite_service
};
//# sourceMappingURL=chunk-YXKEBSLL.js.map
