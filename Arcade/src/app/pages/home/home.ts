import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Juego } from '../../models/juego';
import { JUEGOS } from '../../juegos/juegos.data';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly usuarioAutenticado = this.authService.usuarioAutenticado;

  mensaje = signal('');

  juegos: Juego[]  = JUEGOS;

  abrirJuego(ruta: string): void {
    if (!this.usuarioAutenticado()) {
      this.mensaje.set('Debes iniciar sesión para jugar');
      return;
    }
    this.router.navigate([ruta]);
  }

}
