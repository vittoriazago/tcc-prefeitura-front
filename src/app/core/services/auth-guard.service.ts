import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

import * as toastr from 'toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private auth: AuthService,
        private readonly router: Router) { }

    canActivate() {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            toastr.error('Essa página exige autenticação do usuário. Faça login para continuar.', 'Login');
            return false;
        }

        return true;
    }
    isLoggedIn(): boolean {
        return this.auth.isLoggedIn();
    }
}