import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada?: boolean;
  createdAt?: string;   // ISO
  updatedAt?: string;   // ISO
  color?: NoteColorKey; // nombre de color
}

type NoteColorKey = 'sun' | 'sky' | 'mint' | 'lavender' | 'peach' | 'gray';

const NOTE_BG: Record<NoteColorKey, string> = {
  sun: 'var(--note-sun)',
  sky: 'var(--note-sky)',
  mint: 'var(--note-mint)',
  lavender: 'var(--note-lavender)',
  peach: 'var(--note-peach)',
  gray: 'var(--note-gray)',
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [DatePipe]
})
export class HomePage implements OnInit {
  tareas: Tarea[] = [];
  nombreUsuario = '';
  query = '';

  // paleta por si luego quieres asignar aleatoria u ofrecer selector
  private palette: NoteColorKey[] = ['sun', 'sky', 'mint', 'lavender', 'peach', 'gray'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.cargarTareas();
    this.authService.usuario$.subscribe(usuario => {
      this.nombreUsuario = usuario ?? '';
    });
  }

  ionViewWillEnter() {
    this.cargarTareas();
  }

  getNoteBg(color?: NoteColorKey) {
    return NOTE_BG[(color as NoteColorKey) || 'gray'];
  }

  cargarTareas() {
    const stored = localStorage.getItem('tareas');
    const raw: Tarea[] = stored ? JSON.parse(stored) : [];

    // Migración suave: completar createdAt / updatedAt / color si faltan
    const migrated = raw.map(t => {
      const created = t.createdAt ?? new Date().toISOString();
      const updated = t.updatedAt ?? created;
      const color   = (t.color as NoteColorKey) ?? 'gray';
      return { ...t, createdAt: created, updatedAt: updated, color };
    });

    if (JSON.stringify(raw) !== JSON.stringify(migrated)) {
      localStorage.setItem('tareas', JSON.stringify(migrated));
    }

    this.tareas = migrated;
  }

  get tareasFiltradas(): Tarea[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.tareas;
    return this.tareas.filter(t =>
      (t.titulo || '').toLowerCase().includes(q) ||
      (t.descripcion || '').toLowerCase().includes(q)
    );
  }

  formatFechaHora(iso?: string): string {
    const d = iso ? new Date(iso) : new Date();
    return this.datePipe.transform(d, 'MMM d, HH:mm', 'es-CL') ?? '';
  }

  verDetalle(tarea: Tarea) {
    this.router.navigate(['/detalle-tarea', tarea.id]);
  }

  irAgregar() {
    this.router.navigate(['/agregar-tarea']);
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // (opcional) si en algún momento quieres usar clases además del inline style
  colorClass(t: Tarea) {
    const c = (t.color as NoteColorKey) ?? 'gray';
    return `note--${c}`;
  }
}



