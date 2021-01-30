import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    private auth: AuthService) {
    }

    isLoggedIn(): boolean {
      return this.auth.isLoggedIn();
    }

    getPerfil(): string {
      return this.auth.getPerfil();
    }

    logout() {
      this.auth.logout();
    }
}
