import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { animation, animate, style, trigger, transition, keyframes } from '@angular/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('shake', [
      transition('* => shake', [
        animate('1s', keyframes([
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(0)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('titleAnim', [
      transition(':enter', [
        animate('1s', style({ transform: 'translateY(-20px)', opacity: 0 }))
      ])
    ])
  ]
})
export class HomePage implements OnInit {

  usuario = '';
  infoForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    educacion: ['', Validators.required],
    fechaNacimiento: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state?.['usuario']) {
      this.usuario = nav.extras.state['usuario'];
    }
  }

  ngOnInit() {}

  limpiar() {
    this.infoForm.reset();
    this.shakeInputs();
  }

  shakeState = '';
  shakeInputs() {
    this.shakeState = 'shake';
    setTimeout(() => this.shakeState = '', 1000);
  }

  mostrar() {
    const { nombre, apellido, fechaNacimiento, educacion } = this.infoForm.value;
    alert(`Nombre: ${nombre} ${apellido}\nFecha Nacimiento: ${fechaNacimiento}\nEducación: ${educacion}`);
  }
}

