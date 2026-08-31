import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp ? Date.now() >= payload.exp * 1000 : false;
  } catch {
    return true;
  }
}

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  // Pre-emptive expiry check — logout before the request even leaves
  if (token && isTokenExpired(token)) {
    auth.logout();
    return throwError(() => new Error('Sesión expirada. Inicia sesión nuevamente.'));
  }

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError(err => {
      if (err.status === 401) {
        auth.logout();
      }
      const message = err.error?.message || err.message || 'Error de conexión';
      return throwError(() => new Error(message));
    })
  );
};
