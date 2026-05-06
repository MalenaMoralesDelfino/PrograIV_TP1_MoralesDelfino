import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map, catchError, throwError } from 'rxjs';
import { PerfilGithub } from '../models/perfil-github';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users/MalenaMoralesDelfino';
  private cache: PerfilGithub | null = null;

  constructor(private http: HttpClient) { }

  getPerfilGithub(): Observable<PerfilGithub> {
    if (this.cache) {
      return of(this.cache);
    }

    return this.http.get<PerfilGithub>(this.apiUrl).pipe(
      map(res => ({
        name: res.name,
        avatar_url: res.avatar_url,
        bio: res.bio,
        html_url: res.html_url
      })),
      tap(perfilObtenido => this.cache = perfilObtenido),
      catchError((err) => {
        console.error('Error al obtener el perfil de GitHub:', err);
        return throwError(() => new Error('No se pudo cargar el perfil de GitHub. Por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }
}