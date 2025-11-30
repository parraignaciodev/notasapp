import { TestBed } from '@angular/core/testing';
import { ApiTareasService } from './api-tareas';

describe('ApiTareasService', () => {
  let service: ApiTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

