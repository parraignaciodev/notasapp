import { Inject, Injectable, Optional } from '@angular/core';
import { APP_CONFIG } from '../config/app-config.token';
import { AppConfig } from '../config/app-config';
import { BehaviorSubject } from 'rxjs';

interface Usuario {
  nombre: string; // almacenado normalizado (lowercase + trim)
  clave: string;  // demo: sin hash
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarioSubject = new BehaviorSubject<string | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  private usuariosKey = 'usuarios';
  private usuarioActualKey = 'usuarioActual';

  constructor(
    @Optional() @Inject(APP_CONFIG) private cfg?: AppConfig
  ) {
    this.cargarUsuarioDesdeStorage();
  }

  // --- API config (fusionado desde ApiService) ---
  get baseUrl(): string {
    return this.cfg?.apiBaseUrl ?? '';
  }

  // --- utils ---
  private norm(u: string): string {
    return (u || '').trim().toLowerCase();
  }

  private obtenerUsuarios(): Usuario[] {
    const usuariosStr = localStorage.getItem(this.usuariosKey);
    try {
      return usuariosStr ? JSON.parse(usuariosStr) : [];
    } catch {
      return [];
    }
  }

  private guardarUsuarios(users: Usuario[]) {
    localStorage.setItem(this.usuariosKey, JSON.stringify(users));
  }

  // --- registro ---
  registrarUsuario(nombre: string, clave: string): boolean {
    const usuarios = this.obtenerUsuarios();
    const nNombre = this.norm(nombre);

    if (usuarios.find(u => u.nombre === nNombre)) return false;

    usuarios.push({ nombre: nNombre, clave });
    this.guardarUsuarios(usuarios);
    return true;
  }

  // --- validación ---
  validarUsuario(nombre: string, clave: string): boolean {
    const nNombre = this.norm(nombre);
    const usuarios = this.obtenerUsuarios();
    const found = usuarios.find(u => u.nombre === nNombre);
    return !!found && found.clave === clave;
  }

  // --- login / logout ---
  login(nombre: string): void {
    const nNombre = this.norm(nombre);
    this.usuarioSubject.next(nNombre);
    localStorage.setItem(this.usuarioActualKey, nNombre);
  }

  logout(): void {
    this.usuarioSubject.next(null);
    localStorage.removeItem(this.usuarioActualKey);
  }

  cargarUsuarioDesdeStorage(): void {
    const usuario = localStorage.getItem(this.usuarioActualKey);
    this.usuarioSubject.next(usuario);
  }

  isLoggedIn(): boolean {
    return this.usuarioSubject.value !== null;
  }

  clearAll(): void {
    localStorage.removeItem(this.usuariosKey);
    localStorage.removeItem(this.usuarioActualKey);
  }
}



