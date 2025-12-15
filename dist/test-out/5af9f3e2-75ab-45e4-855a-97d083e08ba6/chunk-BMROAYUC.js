import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-GKFQG4U6.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// src/app/services/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    AuthService = class AuthService2 {
      constructor() {
        this.usuarioSubject = new BehaviorSubject(null);
        this.usuario$ = this.usuarioSubject.asObservable();
        this.usuariosKey = "usuarios";
        this.usuarioActualKey = "usuarioActual";
        this.cargarUsuarioDesdeStorage();
      }
      // --- utils ---
      norm(u) {
        return (u || "").trim().toLowerCase();
      }
      obtenerUsuarios() {
        const usuariosStr = localStorage.getItem(this.usuariosKey);
        try {
          return usuariosStr ? JSON.parse(usuariosStr) : [];
        } catch {
          return [];
        }
      }
      guardarUsuarios(users) {
        localStorage.setItem(this.usuariosKey, JSON.stringify(users));
      }
      // --- registro ---
      registrarUsuario(nombre, clave) {
        const usuarios = this.obtenerUsuarios();
        const nNombre = this.norm(nombre);
        if (usuarios.find((u) => u.nombre === nNombre)) {
          return false;
        }
        usuarios.push({ nombre: nNombre, clave });
        this.guardarUsuarios(usuarios);
        return true;
      }
      // --- validación de credenciales ---
      validarUsuario(nombre, clave) {
        const nNombre = this.norm(nombre);
        const usuarios = this.obtenerUsuarios();
        const found = usuarios.find((u) => u.nombre === nNombre);
        return !!found && found.clave === clave;
      }
      // --- login / logout ---
      login(nombre) {
        const nNombre = this.norm(nombre);
        this.usuarioSubject.next(nNombre);
        localStorage.setItem(this.usuarioActualKey, nNombre);
      }
      logout() {
        this.usuarioSubject.next(null);
        localStorage.removeItem(this.usuarioActualKey);
      }
      cargarUsuarioDesdeStorage() {
        const usuario = localStorage.getItem(this.usuarioActualKey);
        this.usuarioSubject.next(usuario);
      }
      // helper opcional: consulta rápida si hay usuario
      isLoggedIn() {
        return this.usuarioSubject.value !== null;
      }
      // util para pruebas
      clearAll() {
        localStorage.removeItem(this.usuariosKey);
        localStorage.removeItem(this.usuarioActualKey);
      }
      static {
        this.ctorParameters = () => [];
      }
    };
    AuthService = __decorate([
      Injectable({ providedIn: "root" })
    ], AuthService);
  }
});

export {
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-BMROAYUC.js.map
