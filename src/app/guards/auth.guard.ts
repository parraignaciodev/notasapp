import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    return auth.usuario$.pipe(
        take(1), // nos quedamos con el último valor
        map(usuario => {
            if (usuario) {
                // hay usuario logueado → permite acceso
                return true;
            } else {
                // no hay usuario → lo mandamos al login
                router.navigate(['/login']);
                return false;
            }
        })
    );
};
