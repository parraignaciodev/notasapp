import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';

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

  ionViewWillEnter() {
    this.cargarTarea();
  }

  getNoteBg(c?: NoteColorKey) {
    return NOTE_BG[(c as NoteColorKey) || 'gray'];
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
      tareasGuardadas[index].updatedAt = new Date().toISOString();
      localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
      this.tarea.completada = tareasGuardadas[index].completada;
      this.tarea.updatedAt = tareasGuardadas[index].updatedAt;
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
        { text: 'Cancelar', role: 'cancel' },
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



