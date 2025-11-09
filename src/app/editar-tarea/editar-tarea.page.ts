import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

type NoteColorKey = 'sun' | 'sky' | 'mint' | 'lavender' | 'peach' | 'gray';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './editar-tarea.page.html',
  styleUrls: ['./editar-tarea.page.scss']
})
export class EditarTareaPage implements OnInit {
  tareaForm!: FormGroup;
  tareaId!: number;
  palette: NoteColorKey[] = ['sun', 'sky', 'mint', 'lavender', 'peach', 'gray'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3), this.noSoloEspacios]],
      descripcion: ['', [Validators.required, Validators.minLength(5), this.noSoloEspacios]],
      color: ['sun' as NoteColorKey]
    });

    this.tareaId = Number(this.route.snapshot.paramMap.get('id'));
    const tareasGuardadas: any[] = JSON.parse(localStorage.getItem('tareas') || '[]');
    const tarea = tareasGuardadas.find((t: any) => t.id === this.tareaId);

    if (!tarea) {
      this.mostrarToast('No se encontró la tarea para editar', 'danger');
      this.router.navigate(['/home']);
      return;
    }

    this.tareaForm.patchValue({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      color: (tarea.color as NoteColorKey) || 'sun'
    });
  }

  noSoloEspacios(control: AbstractControl) {
    const value = control.value || '';
    return value.trim().length === 0 ? { soloEspacios: true } : null;
  }

  // Actualiza el color al instante y persiste en localStorage
  async setColor(c: NoteColorKey) {
    this.tareaForm.patchValue({ color: c });

    const tareas: any[] = JSON.parse(localStorage.getItem('tareas') || '[]');
    const i = tareas.findIndex((t: any) => t.id === this.tareaId);
    if (i === -1) return;

    tareas[i] = { ...tareas[i], color: c, updatedAt: new Date().toISOString() };
    localStorage.setItem('tareas', JSON.stringify(tareas));

    (await this.toastCtrl.create({ message: 'Color actualizado', duration: 900 })).present();
  }

  async guardar() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }

    const tareasGuardadas: any[] = JSON.parse(localStorage.getItem('tareas') || '[]');
    const index = tareasGuardadas.findIndex((t: any) => t.id === this.tareaId);

    if (index === -1) {
      this.mostrarToast('Error al guardar: tarea no encontrada', 'danger');
      return;
    }

    tareasGuardadas[index] = {
      ...tareasGuardadas[index],
      titulo: this.tareaForm.value.titulo,
      descripcion: this.tareaForm.value.descripcion,
      color: this.tareaForm.value.color, // por si cambió y no alcanzó a persistir
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    await this.mostrarToast('Tarea actualizada exitosamente', 'success');
    this.router.navigate(['/detalle-tarea', this.tareaId]);
  }

  async mostrarToast(message: string, color: string = 'dark') {
    (await this.toastCtrl.create({ message, duration: 1500, color })).present();
  }
}


