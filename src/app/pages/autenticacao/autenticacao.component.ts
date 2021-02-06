import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsuarioLoginModel } from 'src/app/shared/models/usuario-login.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

import * as toastr from 'toastr';
@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  nomeLogado: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private prefeituraService: PrefeituraService,
    private readonly loaderService: NgxUiLoaderService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
    this.nomeLogado = this.getNome();
  }

  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const bodyLoginUsuario: UsuarioLoginModel = {
      Email: this.f.email.value,
      Senha: this.f.senha.value,
    };

    this.loaderService.startLoader('global');

    return this.prefeituraService.postUsuarioLogin(bodyLoginUsuario)
      .subscribe(
        result => {

          this.auth.login(bodyLoginUsuario, result);
          toastr.success('Bem vindo ao sistema da Prefeitura Municipal de Bom Destino.', 'Autenticação');

          this.router.navigateByUrl('', { skipLocationChange: true }).then(
            () => this.router.navigate(['/'])
          );
          this.loaderService.stopLoader('global');
        },
        () => {
          this.loaderService.stopLoader('global');
          toastr.error('Não foi possível se autenticar, verifique suas credenciais ou tente novamente mais tarde', 'Autenticação');
        });

  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getNome(): string {
    return this.auth.getNome();
  }

  logout() {
    this.auth.logout();
  }
}
