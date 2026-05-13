import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map, catchError, throwError } from 'rxjs';
import { PerfilGithub } from '../models/perfil-github';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/users/MalenaMoralesDelfino';
  private cache: PerfilGithub | null = null;
   private readonly http = inject(HttpClient);

  getPerfilGithub(): Observable<PerfilGithub> {
    if (this.cache) {
      return of(this.cache);
    }

    return this.http.get<any>(this.apiUrl).pipe(
      map(res => ({
        name: res.name,
        avatar_url: res.avatar_url,
        bio: res.bio,
        html_url: res.html_url
      })),
      tap(perfilObtenido => this.cache = perfilObtenido),
      catchError((err) => {
        let mensajeError = 'Ocurrió un error inesperado';

        if (err.status === 404) {
          mensajeError = 'El usuario de GitHub no existe';
        } else if (err.status === 403) {
          mensajeError = 'Límite de peticiones de GitHub excedido. Intenta más tarde';
        } else if (err.status === 0) {
          mensajeError = 'No hay conexión a internet';
        }

        console.error('Detalle técnico del error:', err);
        return throwError(() => new Error(mensajeError));
      })
    );
  }
}