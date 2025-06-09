import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  loginForm = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    clave: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
  });

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario } = this.loginForm.value;
      this.navCtrl.navigateForward('/home', { state: { usuario } });
    } else {
      
      console.log('Formulario no válido');
    }
  }
}
