import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);

    // Limpiar espías anteriores si los hubiera
    // En Jasmine los espías se limpian automáticamente por spec, 
    // pero debemos definirlos aquí para interceptar las llamadas.
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');
    // No espiamos getItem aquí porque se usa en el constructor, 
    // y ya se ejecutó al hacer inject.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login() should save session', () => {
    const username = 'testuser';

    // Act
    service.login(username);

    // Assert
    // Verifica que se guardó en localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith('usuarioActual', 'testuser');

    // Verifica que el observable emita el valor
    service.usuario$.subscribe(user => {
      expect(user).toBe('testuser');
    });
  });

  it('logout() should clear session', () => {
    // Arrange
    service.login('testuser'); // Primero logueamos

    // Act
    service.logout();

    // Assert
    // Verifica que se eliminó de localStorage
    expect(localStorage.removeItem).toHaveBeenCalledWith('usuarioActual');

    // Verifica que el observable sea null
    service.usuario$.subscribe(user => {
      expect(user).toBeNull();
    });
  });
});
