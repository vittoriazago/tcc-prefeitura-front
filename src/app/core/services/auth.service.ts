import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioLogadoModel } from 'src/app/shared/models/usuario-logado.model';
import { UsuarioLoginModel } from 'src/app/shared/models/usuario-login.model';

export const NOME = 'nome';
export const PERFIL = 'perfil';
export const TOKEN = 'token';

import * as toastr from 'toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  login(usuarioLogin: UsuarioLoginModel, usuarioLogado: UsuarioLogadoModel) {
    localStorage.setItem(NOME, usuarioLogado.Usuario.Nome);
    localStorage.setItem(TOKEN, usuarioLogado.Token);

    // mock profile definition
    if (usuarioLogin.Email.includes('sgm')) {
      localStorage.setItem(PERFIL, 'servidor');
    } else if (usuarioLogin.Email.includes('adm')) {
      localStorage.setItem(PERFIL, 'admin');
    } else {
      localStorage.setItem(PERFIL, 'comum');
    }
  }

  logout() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(NOME);
    localStorage.removeItem(PERFIL);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN);
  }

  getPerfil(): string {
    return localStorage.getItem(PERFIL);
  }
  getNome(): string {
    return localStorage.getItem(NOME);
  }

}
