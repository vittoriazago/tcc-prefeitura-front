import { Injectable } from '@angular/core';

export const LOGADO = 'logado';
export const PERFIL = 'perfil';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
  ) {
   }

  logout() {
    localStorage.removeItem(LOGADO);
    localStorage.removeItem(PERFIL);
  }

  login(email: string) {
    localStorage.setItem(LOGADO, 'true');
    if (email.includes('serv')) {
      localStorage.setItem(PERFIL, 'servidor');
    } else if (email.includes('adm')) {
      localStorage.setItem(PERFIL, 'admin');
    } else {
      localStorage.setItem(PERFIL, 'comum');
    }

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(LOGADO);
  }

  getPerfil(): string {
    return localStorage.getItem(PERFIL);
  }

}
