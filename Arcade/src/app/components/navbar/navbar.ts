import { Component,inject } from '@angular/core';
import {RouterModule, Router,RouterLinkActive} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly usuarioAutenticado = this.authService.usuarioAutenticado;
  
  async logout() {
    try {
      await this.authService.logout();
      await this.router.navigate(['/home']);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Error inesperado al cerrar sesión');
    }
}
}