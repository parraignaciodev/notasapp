import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Importar servicio

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage implements OnInit {
  tareas: Tarea[] = [];
  nombreUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.cargarTareas();

    // Suscribirse al observable del usuario para actualizar el nombre
    this.authService.usuario$.subscribe(usuario => {
      this.nombreUsuario = usuario ?? '';
    });
  }

  ionViewWillEnter() {
    this.cargarTareas();
  }

  cargarTareas() {
    const stored = localStorage.getItem('tareas');
    this.tareas = stored ? JSON.parse(stored) : [];
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
}

