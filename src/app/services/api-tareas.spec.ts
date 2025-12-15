import { TestBed } from '@angular/core/testing';
import { ApiTareasService } from './api-tareas';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { StorageService } from './storage.service';

describe('ApiTareasService', () => {
  let service: ApiTareasService;

  beforeEach(() => {
    const storageSpy = jasmine.createSpyObj('StorageService', ['set', 'get', 'remove']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: StorageService, useValue: storageSpy }
      ]
    });
    service = TestBed.inject(ApiTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
