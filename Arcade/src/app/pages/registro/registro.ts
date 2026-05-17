import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { confirmarPasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  private readonly authService = inject(AuthService);
  private readonly usuariosService = inject(UsuariosService);
  private readonly router = inject(Router);

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required, Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repetirPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  }, {
    validators: [confirmarPasswordValidator()]
  });

  get email() {
    return this.registroForm.get('email');
  }

  get nombre() {
    return this.registroForm.get('nombre');
  }

  get apellido() {
    return this.registroForm.get('apellido');
  }

  get edad() {
    return this.registroForm.get('edad');
  }

  get password() {
    return this.registroForm.get('password');
  }

  get repetirPassword() {
    return this.registroForm.get('repetirPassword');
  }
  async submit() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }
    try {
      const nuevoUsuario: Usuario = {
        nombre: this.nombre?.value as string,
        apellido: this.apellido?.value as string,
        edad: Number(this.edad?.value),
        email: this.email?.value as string
      };
      await this.usuariosService.guardarUsuario(nuevoUsuario);
      await this.authService.register(this.email?.value as string, this.password?.value as string);
      alert('Registro exitoso.');
      await this.authService.login(this.email?.value as string, this.password?.value as string);
      this.router.navigate(['/home']);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error inesperado al registrarse');
    }
  }
}
