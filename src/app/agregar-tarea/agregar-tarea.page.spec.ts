import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTareaPage } from './agregar-tarea.page';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

describe('AgregarTareaPage', () => {
  let component: AgregarTareaPage;
  let fixture: ComponentFixture<AgregarTareaPage>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const toastSpy = jasmine.createSpyObj('ToastController', ['create']);
    toastSpy.create.and.returnValue(Promise.resolve({ present: () => Promise.resolve() }));
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward', 'navigateBack']);

    await TestBed.configureTestingModule({
      imports: [AgregarTareaPage, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastController, useValue: toastSpy },
        { provide: NavController, useValue: navCtrlSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
