import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController, AlertController, IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Importa tu servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginPage implements OnInit {

  loginForm = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    clave: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
  });

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService  // Inyecta el servicio aquí
  ) {}

  ngOnInit() {}

  async onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;
      const clave = this.loginForm.get('clave')?.value;

      if (usuario && clave) {
        const esValido = this.authService.validarUsuario(usuario, clave);
        if (esValido) {
          this.authService.login(usuario);
          this.navCtrl.navigateForward('/home');
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Usuario o contraseña incorrectos',
            buttons: ['OK']
          });
          await alert.present();
        }
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Formulario inválido',
          message: 'El usuario y la clave no pueden estar vacíos.',
          buttons: ['OK']
        });
        await alert.present();
      }

    } else {
      const alert = await this.alertCtrl.create({
        header: 'Formulario inválido',
        message: 'Verifica que el usuario y la contraseña cumplan los requisitos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

