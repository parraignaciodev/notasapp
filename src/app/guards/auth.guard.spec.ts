import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

describe('AuthGuard', () => {
    let authServiceSpy: jasmine.SpyObj<AuthService>;
    let routerSpy: jasmine.SpyObj<Router>;

    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => authGuard(...guardParameters));

    beforeEach(() => {
        const authSpy = jasmine.createSpyObj('AuthService', [], {
            usuario$: of(null) // Default to not logged in
        });
        const rSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: authSpy },
                { provide: Router, useValue: rSpy }
            ]
        });

        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
        routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });

    it('should redirect to /login and return false if not logged in', (done) => {
        // Arrange
        // usuario$ is already null from beforeEach

        // Act
        const result = executeGuard({} as any, {} as any);

        // Assert
        if (result instanceof Promise) {
            // Handle promise if needed (though our guard returns Observable)
        } else {
            // Observable
            (result as any).subscribe((res: boolean | UrlTree) => {
                expect(res).toBeFalse();
                expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
                done();
            });
        }
    });

    it('should allow access (return true) if logged in', (done) => {
        // Arrange
        // Mock user logged in
        (Object.getOwnPropertyDescriptor(authServiceSpy, 'usuario$')?.get as jasmine.Spy).and.returnValue(of('testuser'));

        // Act
        const result = executeGuard({} as any, {} as any);

        // Assert
        (result as any).subscribe((res: boolean | UrlTree) => {
            expect(res).toBeTrue();
            expect(routerSpy.navigate).not.toHaveBeenCalled();
            done();
        });
    });
});
