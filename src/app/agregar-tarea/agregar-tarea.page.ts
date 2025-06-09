import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgregarTareaPage {
  tareaForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3), this.noSoloEspacios]],
    descripcion: ['', [Validators.required, Validators.minLength(5), this.noSoloEspacios]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  noSoloEspacios(control: AbstractControl) {
    const value = control.value || '';
    return value.trim().length === 0 ? { soloEspacios: true } : null;
  }

  async guardar() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      ...this.tareaForm.value
    };

    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    const toast = await this.toastCtrl.create({
      message: 'Tarea guardada exitosamente',
      duration: 2000,
      color: 'success'
    });

    await toast.present();

    // ✅ Redirigir al home después de guardar
    this.router.navigate(['/home']);
  }
}

