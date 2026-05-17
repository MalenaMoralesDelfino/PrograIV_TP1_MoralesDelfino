import { Injectable } from '@angular/core';
import { supabase } from '../../enviroments/supabase.environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  async guardarUsuario(usuario: Usuario): Promise<void> {
    try {
      const { error } = await supabase.from('usuarios').insert(usuario);
      if (error) {
        throw new Error('Error al guardar usuario en la base de datos: ' + error.message);
      }
    } catch (error: any) {
      console.error('Error inesperado al guardar usuario:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Error al guardar usuario');
    }
  }
}