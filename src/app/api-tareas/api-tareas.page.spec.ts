import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTareasPage } from './api-tareas.page';
import { ApiTareasService } from '../services/api-tareas';
import { ToastController } from '@ionic/angular';
import { of } from 'rxjs';

describe('ApiTareasPage', () => {
  let component: ApiTareasPage;
  let fixture: ComponentFixture<ApiTareasPage>;

  beforeEach(async () => {
    const apiSpy = jasmine.createSpyObj('ApiTareasService', ['getTareas', 'createTarea', 'updateTarea', 'deleteTarea']);
    apiSpy.getTareas.and.returnValue(of([]));

    const toastSpy = jasmine.createSpyObj('ToastController', ['create']);
    toastSpy.create.and.returnValue(Promise.resolve({ present: () => Promise.resolve() }));

    await TestBed.configureTestingModule({
      imports: [ApiTareasPage],
      providers: [
        { provide: ApiTareasService, useValue: apiSpy },
        { provide: ToastController, useValue: toastSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
