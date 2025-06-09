import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  templateUrl: './detalle-tarea.page.html',
  styleUrls: ['./detalle-tarea.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class DetalleTareaPage implements OnInit {
  tarea: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cargarTarea();
  }

  cargarTarea() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    this.tarea = tareasGuardadas.find((t: any) => t.id === id);
  }

  volver() {
    this.router.navigate(['/home']);
  }

  toggleEstado() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    const index = tareasGuardadas.findIndex((t: any) => t.id === this.tarea.id);
    if (index !== -1) {
      tareasGuardadas[index].completada = !tareasGuardadas[index].completada;
      localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
      this.tarea.completada = tareasGuardadas[index].completada;
    }
  }

  editar() {
    this.router.navigate(['/editar-tarea', this.tarea.id]);
  }

  async eliminar() {
    const alerta = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
            const nuevasTareas = tareasGuardadas.filter((t: any) => t.id !== this.tarea.id);
            localStorage.setItem('tareas', JSON.stringify(nuevasTareas));

            const toast = await this.toastCtrl.create({
              message: 'Tarea eliminada correctamente',
              duration: 2000,
              color: 'danger'
            });
            await toast.present();

            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alerta.present();
  }
}


