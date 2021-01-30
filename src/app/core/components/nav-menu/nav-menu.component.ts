import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(
    private auth: AuthService) {
    }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getPerfil(): string {
    return this.auth.getPerfil();
  }

  getPerfilAcessoMunicipe(): boolean {
    const perfil = this.auth.getPerfil();
    return perfil === 'comum';
  }
  getPerfilAcessoServidor(): boolean {
    const perfil = this.auth.getPerfil();
    return perfil === 'servidor' || perfil === 'admin';
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
