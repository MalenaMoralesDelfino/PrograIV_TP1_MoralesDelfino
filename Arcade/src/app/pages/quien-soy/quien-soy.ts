import { Component, OnInit, signal, inject } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { PerfilGithub } from '../../models/perfil-github';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-quien-soy',
  imports: [CommonModule],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css',
})
export class QuienSoy implements OnInit {
  perfil = signal<PerfilGithub | null>(null);
  cargando = signal(true);
  msjError = signal<string | null>(null);
  private readonly githubService: GithubService = inject(GithubService);

  ngOnInit() {
    this.githubService.getPerfilGithub().pipe(
      finalize(() => {
        this.cargando.set(false);
      })
    ).subscribe({
      next: (perfilObtenido) => {
        if (!perfilObtenido || !perfilObtenido.name) {
          this.msjError.set('Datos inválidos del perfil');
          return;
        }
        this.perfil.set(perfilObtenido);
        this.msjError.set(null);
      },
      error: (err) => {
        console.error('Error al obtener el perfil de GitHub:', err);
        this.msjError.set(err.message || 'Error inesperado'); 
      }
    });
  }
}
