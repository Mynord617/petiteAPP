import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from '../auth.service';
import { take, tap } from 'rxjs/operators';

export const authGuard = () => {

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