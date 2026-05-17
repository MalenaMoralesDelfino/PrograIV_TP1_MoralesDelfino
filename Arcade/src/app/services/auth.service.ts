import { Injectable, signal } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { supabase } from '../../enviroments/supabase.environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuarioActual = signal<User | null>(null);
  readonly usuarioAutenticado = this._usuarioActual.asReadonly();


  async login(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        let mensaje = 'Error al iniciar sesión';

        if (error.status === 401) {
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
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Error al iniciar sesión', { cause: error });
    }
  }


  async register(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        let mensaje = 'Error al registrarse';
        if (error.status === 422 || (error.message.includes('already'))) {
          mensaje = 'El correo electrónico ya está registrado. Intenta con otro email o inicia sesión.';
        }
        throw new Error(mensaje);
      }

      if (!data.user) {
        throw new Error('No se pudo crear el usuario.');
      }

    } catch (error: any) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Error al registrarse', { cause: error });
    }
  }

  async logout(): Promise<void> {
    try {

      const { error } = await supabase.auth.signOut();

      if (error) throw error;
      this._usuarioActual.set(null);

    } catch (error: any) {
      console.error('Error inesperado en logout:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Error al cerrar sesión', { cause: error });
    }
  }
}