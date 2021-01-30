import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    private auth: AuthService,
    private readonly router: Router) {
    }

    isLoggedIn(): boolean {
      return this.auth.isLoggedIn();
    }

    getPerfil(): string {
      return this.auth.getPerfil();
    }

    logout() {
      this.auth.logout();
      this.router.navigate(['/']);
    }
}
