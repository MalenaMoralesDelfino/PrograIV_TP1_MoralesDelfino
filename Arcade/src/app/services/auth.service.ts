import { Injectable, computed, signal } from '@angular/core';
import { createClient, User } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY';
const LOG_TABLE = 'auth_logs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  private usuario = signal<User | null>(null);
  readonly isAuthenticated = computed(() => !!this.usuario());
  readonly userId = computed(() => this.usuario()?.id ?? null);

  async login(email: string, password: string): Promise<User> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !data.user) {
      throw new Error(error?.message ?? 'No se pudo iniciar sesión');
    }

    this.usuario.set(data.user);
    await this.recordLogin(data.user.id);

    return data.user;
  }

  logout(): void {
    this.usuario.set(null);
    void this.supabase.auth.signOut();
  }

  private async recordLogin(userId: string): Promise<void> {
    const { error } = await this.supabase.from(LOG_TABLE).insert([
      {
        user_id: userId,
        event: 'login'
      }
    ]);

    if (error) {
      console.error('Error al guardar el log de auditoría:', error.message);
    }
  }
}
