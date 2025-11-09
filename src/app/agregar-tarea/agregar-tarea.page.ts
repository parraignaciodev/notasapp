import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

type NoteColorKey = 'sun' | 'sky' | 'mint' | 'lavender' | 'peach' | 'gray';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule]
})
export class AgregarTareaPage {
  // Paleta disponible (horizontal en la vista)
  palette: NoteColorKey[] = ['sun', 'sky', 'mint', 'lavender', 'peach', 'gray'];

  // Form con tus validaciones + campo color
  tareaForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3), this.noSoloEspacios]],
    descripcion: ['', [Validators.required, Validators.minLength(5), this.noSoloEspacios]],
    color: ['sun' as NoteColorKey]   // valor por defecto
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  // Validador original (se mantiene)
  noSoloEspacios(control: AbstractControl) {
    const value = control.value || '';
    return value.trim().length === 0 ? { soloEspacios: true } : null;
  }

  // Cambiar color desde la UI
  setColor(c: NoteColorKey) {
    this.tareaForm.patchValue({ color: c });
  }

  // Guardar nota manteniendo tu flujo (toast + navegar a /home)
  async guardar() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }

    const tareasGuardadas: any[] = JSON.parse(localStorage.getItem('tareas') || '[]');

    const now = new Date().toISOString();
    const nuevaTarea = {
      id: Date.now(), // se conserva tu forma de generar id
      titulo: this.tareaForm.value.titulo,
      descripcion: this.tareaForm.value.descripcion,
      color: this.tareaForm.value.color, // nuevo campo
      completada: false,
      createdAt: now,
      updatedAt: now
    };

    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    const toast = await this.toastCtrl.create({
      message: 'Tarea guardada exitosamente',
      duration: 2000,
      color: 'success'
    });
    await toast.present();

    // ✅ Se mantiene tu redirección original
    this.router.navigate(['/home']);
  }
}


