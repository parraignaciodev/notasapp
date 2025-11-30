import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

// Modelo sencillo compatible con jsonplaceholder /todos
export interface ApiTarea {
  id?: number;          // id lo da la API
  userId?: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApiTareasService {
  // URL base de la API
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // Opciones HTTP (cabeceras, etc.)
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  private cacheKey = 'api_tareas_cache';

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  // --- Helpers de error ---

  private handleError(error: HttpErrorResponse) {
    console.error('[API] Error', error);
    let msg = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      msg = `Error de red: ${error.error.message}`;
    } else {
      msg = `Error servidor: ${error.status} - ${error.message}`;
    }
    return throwError(() => msg);
  }

  // --- CRUD ---

  // GET /todos
  getTareas(): Observable<ApiTarea[]> {
    return this.http
      .get<ApiTarea[]>(`${this.baseUrl}/todos`, this.httpOptions)
      .pipe(
        retry(2),
        tap(async data => {
          // Guardar en cache (offline)
          await this.storage.set(this.cacheKey, data);
        }),
        catchError(async err => {
          console.warn('[API] Error, intentando leer cache local', err);
          const cached = await this.storage.get<ApiTarea[]>(this.cacheKey);
          if (cached) {
            console.log('[API] Usando datos desde cache local');
            return cached;
          }
          return this.handleError(err);
        }) as any
      );
  }

  // GET /todos/:id
  getTarea(id: number): Observable<ApiTarea> {
    return this.http
      .get<ApiTarea>(`${this.baseUrl}/todos/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // POST /todos
  createTarea(tarea: ApiTarea): Observable<ApiTarea> {
    return this.http
      .post<ApiTarea>(
        `${this.baseUrl}/todos`,
        JSON.stringify(tarea),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // PUT /todos/:id
  updateTarea(id: number, tarea: ApiTarea): Observable<ApiTarea> {
    return this.http
      .put<ApiTarea>(
        `${this.baseUrl}/todos/${id}`,
        JSON.stringify(tarea),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // DELETE /todos/:id
  deleteTarea(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/todos/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
}
