import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'moldtek_token';
  private readonly USER_KEY = 'moldtek_user';

  private _currentUser = signal<LoginResponse | null>(this.loadUser());
  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn = computed(() => this._currentUser() !== null);
  readonly isAdmin = computed(() => this._currentUser()?.roles.includes('ROLE_ADMIN') ?? false);
  readonly isManager = computed(() =>
    this._currentUser()?.roles.some(r => ['ROLE_ADMIN', 'ROLE_MANAGER'].includes(r)) ?? false
  );

  constructor(private http: HttpClient, private router: Router) {}

  login(request: LoginRequest): Observable<{ data: LoginResponse }> {
    return this.http.post<{ data: LoginResponse }>(`${environment.apiUrl}/auth/login`, request).pipe(
      tap(response => {
        const user = response.data;
        localStorage.setItem(this.TOKEN_KEY, user.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this._currentUser.set(user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get companyId(): number | null {
    return this._currentUser()?.companyId ?? null;
  }

  get userId(): number | null {
    return this._currentUser()?.userId ?? null;
  }

  hasRole(role: string): boolean {
    return this._currentUser()?.roles.includes(role) ?? false;
  }

  private loadUser(): LoginResponse | null {
    try {
      const stored = localStorage.getItem(this.USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
}
