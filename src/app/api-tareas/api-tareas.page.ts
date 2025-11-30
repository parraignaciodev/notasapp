// src/app/api-tareas/api-tareas.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController, IonList } from '@ionic/angular';
import { ApiTareasService, ApiTarea } from '../services/api-tareas';

@Component({
  selector: 'app-api-tareas',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './api-tareas.page.html',
  styleUrls: ['./api-tareas.page.scss'],
})
export class ApiTareasPage implements OnInit {
  tareas: ApiTarea[] = [];
  cargando = false;

  constructor(
    private api: ApiTareasService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cargar();
  }

  async cargar(event?: any) {
    this.cargando = true;
    this.api.getTareas().subscribe({
      next: data => {
        // para no llenar la pantalla, tomamos solo las primeras 10
        this.tareas = data.slice(0, 10);
        this.cargando = false;
        event?.target?.complete();
      },
      error: async err => {
        this.cargando = false;
        event?.target?.complete();
        const t = await this.toastCtrl.create({
          message: String(err),
          duration: 2500,
          color: 'danger',
        });
        t.present();
      },
    });
  }

  async crearDemo() {
    const nueva: ApiTarea = {
      title: 'Nueva tarea demo',
      completed: false,
      userId: 1,
    };

    this.api.createTarea(nueva).subscribe({
      next: async res => {
        this.tareas.unshift(res);
        const t = await this.toastCtrl.create({
          message: 'Tarea demo creada (finge en la API)',
          duration: 2000,
          color: 'success',
        });
        t.present();
      },
      error: async err => {
        const t = await this.toastCtrl.create({
          message: String(err),
          duration: 2500,
          color: 'danger',
        });
        t.present();
      },
    });
  }

  toggleCompleta(t: ApiTarea) {
    const actualizado: ApiTarea = { ...t, completed: !t.completed };
    if (!t.id) return;

    this.api.updateTarea(t.id, actualizado).subscribe({
      next: async res => {
        Object.assign(t, res);
        const toast = await this.toastCtrl.create({
          message: 'Estado actualizado (PUT demo)',
          duration: 2000,
          color: 'medium',
        });
        toast.present();
      },
      error: async err => {
        const ttoast = await this.toastCtrl.create({
          message: String(err),
          duration: 2500,
          color: 'danger',
        });
        ttoast.present();
      },
    });
  }

  eliminar(t: ApiTarea) {
    if (!t.id) return;
    this.api.deleteTarea(t.id).subscribe({
      next: async () => {
        this.tareas = this.tareas.filter(x => x.id !== t.id);
        const toast = await this.toastCtrl.create({
          message: 'Eliminado (DELETE demo)',
          duration: 2000,
          color: 'warning',
        });
        toast.present();
      },
      error: async err => {
        const ttoast = await this.toastCtrl.create({
          message: String(err),
          duration: 2500,
          color: 'danger',
        });
        ttoast.present();
      },
    });
  }
}
