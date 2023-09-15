import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../auth.service';
import { inject } from '@angular/core';
import { take, tap } from 'rxjs';

export const usuarioLogueadoGuard = () => {
 

  const authService = inject(AuthServices);
  const router = inject(Router);
  return authService.estadoDeUsuario
    .pipe(
          take(1),
          tap((res)=>console.log(!!res)),
          tap((isLoggedIn)=>
              !!isLoggedIn ? true : router.navigate(['/login'])
    )
    );
};
