import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTareaPage } from './detalle-tarea.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController, NavController } from '@ionic/angular';

describe('DetalleTareaPage', () => {
  let component: DetalleTareaPage;
  let fixture: ComponentFixture<DetalleTareaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTareaPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: { get: () => '1' }
            }
          }
        },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        {
          provide: AlertController,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve({ present: () => Promise.resolve() }))
          }
        },
        {
          provide: ToastController,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve({ present: () => Promise.resolve() }))
          }
        },
        {
          provide: NavController,
          useValue: jasmine.createSpyObj('NavController', ['navigateForward', 'navigateBack'])
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTareaPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('toggleEstado() should change completada and update date', () => {
    const mockTask = { id: 1, titulo: 'Test', completada: false, updatedAt: '2023-01-01T00:00:00.000Z' };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([mockTask]));
    spyOn(localStorage, 'setItem');

    fixture.detectChanges();

    component.toggleEstado();

    expect(component.tarea.completada).toBeTrue();
    expect(component.tarea.updatedAt).not.toBe('2023-01-01T00:00:00.000Z');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('borrarFoto() should clear fotoData', async () => {
    const mockTask = { id: 1, titulo: 'Test', fotoData: 'base64-image' };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([mockTask]));
    spyOn(localStorage, 'setItem');

    fixture.detectChanges();

    await component.borrarFoto();

    expect(component.tarea.fotoData).toBeNull();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
