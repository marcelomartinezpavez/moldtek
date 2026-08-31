import {
  Router
} from "./chunk-Q2CMZJDU.js";
import {
  HttpClient,
  environment
} from "./chunk-C3SHWEMB.js";
import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EHKUBBLL.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.TOKEN_KEY = "moldtek_token";
    this.USER_KEY = "moldtek_user";
    this._currentUser = signal(
      this.loadUser(),
      ...ngDevMode ? [{ debugName: "_currentUser" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentUser = this._currentUser.asReadonly();
    this.isLoggedIn = computed(
      () => this._currentUser() !== null,
      ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isAdmin = computed(
      () => this._currentUser()?.roles.includes("ROLE_ADMIN") ?? false,
      ...ngDevMode ? [{ debugName: "isAdmin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isManager = computed(
      () => this._currentUser()?.roles.some((r) => ["ROLE_ADMIN", "ROLE_MANAGER"].includes(r)) ?? false,
      ...ngDevMode ? [{ debugName: "isManager" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  login(request) {
    return this.http.post(`${environment.apiUrl}/auth/login`, request).pipe(tap((response) => {
      const user = response.data;
      localStorage.setItem(this.TOKEN_KEY, user.token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this._currentUser.set(user);
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  get companyId() {
    return this._currentUser()?.companyId ?? null;
  }
  get userId() {
    return this._currentUser()?.userId ?? null;
  }
  hasRole(role) {
    return this._currentUser()?.roles.includes(role) ?? false;
  }
  loadUser() {
    try {
      const stored = localStorage.getItem(this.USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# debugId=a97eeb7f-b424-53b1-a10b-aba1c9c523e2
//# sourceMappingURL=chunk-KIOEOHFO.js.map
