import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTareaPage } from './editar-tarea.page';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditarTareaPage', () => {
  let component: EditarTareaPage;
  let fixture: ComponentFixture<EditarTareaPage>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const toastSpy = jasmine.createSpyObj('ToastController', ['create']);
    toastSpy.create.and.returnValue(Promise.resolve({ present: () => Promise.resolve() }));
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward', 'navigateBack']);

    const activatedRouteSpy = {
      snapshot: {
        paramMap: {
          get: () => '1'
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [EditarTareaPage, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastController, useValue: toastSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: NavController, useValue: navCtrlSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTareaPage);
    component = fixture.componentInstance;

    // Mock localStorage for ngOnInit
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([{ id: 1, titulo: 'Test', descripcion: 'Test desc', color: 'sun' }]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
