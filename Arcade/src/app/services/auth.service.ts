import { Injectable, signal } from '@angular/core';
import { createClient, User } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  private _usuarioActual = signal<User | null>(null);
  readonly usuarioAutenticado = this._usuarioActual.asReadonly();

  async login(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        let mensaje = 'Error al iniciar sesión';

        if (error.status === 400) {
          mensaje = 'Credenciales inválidas. Revisa tu email y contraseña.';
        } else if (error.status === 429) {
          mensaje = 'Demasiados intentos. Intenta más tarde.';
        }

        throw new Error(mensaje);
      }
      if (!data.user) {
        throw new Error('No se pudo obtener el usuario.');
      }

      this._usuarioActual.set(data.user);

    } catch (error: any) {
      console.error('Error inesperado en login:', error);
      throw error;
    }
  }


  async logout(): Promise<void> {
    try {

      const { error } = await this.supabase.auth.signOut();

      if (error) {
        throw new Error('No se pudo cerrar sesión');
      }

      this._usuarioActual.set(null);

    } catch (error: any) {

      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}
