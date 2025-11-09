import { Injectable } from '@angular/core';
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

  constructor() {
    this.cargarUsuarioDesdeStorage();
  }

  // --- utils ---
  private norm(u: string): string {
    return (u || '').trim().toLowerCase();
  }

  private obtenerUsuarios(): Usuario[] {
    const usuariosStr = localStorage.getItem(this.usuariosKey);
    try { return usuariosStr ? JSON.parse(usuariosStr) : []; }
    catch { return []; }
  }

  private guardarUsuarios(users: Usuario[]) {
    localStorage.setItem(this.usuariosKey, JSON.stringify(users));
  }

  // Registro
  registrarUsuario(nombre: string, clave: string): boolean {
    const usuarios = this.obtenerUsuarios();
    const nNombre = this.norm(nombre);

    if (usuarios.find(u => u.nombre === nNombre)) {
      return false; // ya existe
    }

    usuarios.push({ nombre: nNombre, clave });
    this.guardarUsuarios(usuarios);
    return true;
  }

  // Validación de credenciales
  validarUsuario(nombre: string, clave: string): boolean {
    const nNombre = this.norm(nombre);
    const usuarios = this.obtenerUsuarios();
    const found = usuarios.find(u => u.nombre === nNombre);
    return !!found && found.clave === clave;
  }

  // Login: guarda solo el nombre normalizado
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

  // util para pruebas
  clearAll(): void {
    localStorage.removeItem(this.usuariosKey);
    localStorage.removeItem(this.usuarioActualKey);
  }
}



