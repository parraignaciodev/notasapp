import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.page.html',
  styleUrls: ['./editar-tarea.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class EditarTareaPage implements OnInit {
  tareaForm!: FormGroup;
  tareaId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3), this.noSoloEspacios]],
      descripcion: ['', [Validators.required, Validators.minLength(5), this.noSoloEspacios]]
    });

    this.tareaId = Number(this.route.snapshot.paramMap.get('id'));
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    const tarea = tareasGuardadas.find((t: any) => t.id === this.tareaId);

    if (!tarea) {
      this.mostrarToast('No se encontró la tarea para editar', 'danger');
      this.router.navigate(['/home']);
      return;
    }

    // Prellenar formulario
    this.tareaForm.patchValue({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion
    });
  }

  noSoloEspacios(control: AbstractControl) {
    const value = control.value || '';
    return value.trim().length === 0 ? { soloEspacios: true } : null;
  }

  async guardar() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }

    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    const index = tareasGuardadas.findIndex((t: any) => t.id === this.tareaId);

    if (index === -1) {
      this.mostrarToast('Error al guardar: tarea no encontrada', 'danger');
      return;
    }

    // Actualizar tarea
    tareasGuardadas[index] = {
      ...tareasGuardadas[index],
      titulo: this.tareaForm.value.titulo,
      descripcion: this.tareaForm.value.descripcion
    };

    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    await this.mostrarToast('Tarea actualizada exitosamente', 'success');
    this.router.navigate(['/detalle-tarea', this.tareaId]);
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      color
    });
    await toast.present();
  }
}

