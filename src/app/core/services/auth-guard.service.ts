import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
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
            return false;
        }

        return true;
    }
    isLoggedIn(): boolean {
        return this.auth.isLoggedIn();
    }
}