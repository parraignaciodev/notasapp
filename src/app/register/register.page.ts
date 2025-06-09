import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController, AlertController, IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Importar servicio

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService  // Inyectar AuthService
  ) {
    this.registerForm = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const { usuario, clave } = this.registerForm.value;

      const registrado = this.authService.registrarUsuario(usuario, clave);

      if (registrado) {
        // Registro exitoso, navegar a login
        this.navCtrl.navigateRoot('/login');
      } else {
        // Usuario ya existe, mostrar alerta
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'El usuario ya existe, elige otro nombre.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}


