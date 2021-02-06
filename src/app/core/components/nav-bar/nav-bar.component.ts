import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  nomeLogado: string;

  constructor(
    private auth: AuthService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.nomeLogado = this.getNome();
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getPerfil(): string {
    return this.auth.getPerfil();
  }

  getNome(): string {
    return this.auth.getNome().split(' ', 1)[0];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
