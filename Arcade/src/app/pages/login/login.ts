import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly email = signal('');
  readonly password = signal('');
  readonly cargando = signal(false);
  readonly mensajeError = signal('');
  readonly accesoRapido = signal([
    { label: 'Admin', email: 'admin@arcade.test', password: 'Admin123!' },
    { label: 'Invitado', email: 'invitado@arcade.test', password: 'Invitado123!' }
  ]);

  async submit() {
    this.mensajeError.set('');
    this.cargando.set(true);

    try {
      await this.authService.login(this.email(), this.password());
      await this.router.navigate(['/home']);
    } catch (error) {
      this.mensajeError.set(error instanceof Error ? error.message : 'Error inesperado al iniciar sesión');
    } finally {
      this.cargando.set(false);
    }
  }

  completarAccesoRapido(user: { email: string; password: string }) {
    this.email.set(user.email);
    this.password.set(user.password);
  }
}

