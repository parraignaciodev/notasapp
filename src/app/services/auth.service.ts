import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Usuario {
  nombre: string;
  clave: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioSubject = new BehaviorSubject<string | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  private usuariosKey = 'usuarios';       // clave para la lista de usuarios
  private usuarioActualKey = 'usuarioActual'; // clave para usuario logueado

  constructor() {
    this.cargarUsuarioDesdeStorage();
  }

  // Registro de nuevo usuario
  registrarUsuario(nombre: string, clave: string): boolean {
    const usuarios = this.obtenerUsuarios();

    // Revisar si usuario ya existe
    if (usuarios.find(u => u.nombre === nombre)) {
      return false; // usuario ya existe
    }

    // Agregar nuevo usuario y guardar
    usuarios.push({ nombre, clave });
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
    return true;
  }

  // Login solo recibe el nombre (usuario)
  login(nombre: string): void {
    this.usuarioSubject.next(nombre);
    localStorage.setItem(this.usuarioActualKey, nombre);
  }

  // Logout
  logout() {
    this.usuarioSubject.next(null);
    localStorage.removeItem(this.usuarioActualKey);
  }

  // Obtener usuario logueado al iniciar app
  cargarUsuarioDesdeStorage() {
    const usuario = localStorage.getItem(this.usuarioActualKey);
    this.usuarioSubject.next(usuario);
  }

  // Obtener lista de usuarios guardados
  private obtenerUsuarios(): Usuario[] {
    const usuariosStr = localStorage.getItem(this.usuariosKey);
    return usuariosStr ? JSON.parse(usuariosStr) : [];
  }

  // Validar usuario y clave
  validarUsuario(nombre: string, clave: string): boolean {
    const usuarios = this.obtenerUsuarios();
    return usuarios.some(u => u.nombre === nombre && u.clave === clave);
  }
}



