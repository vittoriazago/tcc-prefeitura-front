import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UsuarioCadastroModel } from 'src/app/shared/models/usuario-cadastro.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

import * as toastr from 'toastr';
@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  cadastroUsuarioForm: FormGroup;
  returnUrl = 'login';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private prefeituraService: PrefeituraService,
    private readonly loaderService: NgxUiLoaderService
  ) { }

  ngOnInit() {

    this.cadastroUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      documento: ['', [Validators.required]],
      telefone: ['', []],
      confimaSenha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() {
    return this.cadastroUsuarioForm.controls;
  }

  cadastrarUsuario() {
    this.submitted = true;
    if (this.cadastroUsuarioForm.invalid) {
      return;
    }

    const bodyCadastroUsuario: UsuarioCadastroModel = {
      Nome: this.f.nome.value,
      Documento: this.f.documento.value,
      Email: this.f.email.value,
      Senha: this.f.senha.value,
    };

    this.loaderService.startLoader('global');
    this.prefeituraService.postUsuario(bodyCadastroUsuario)
      .subscribe(
        () => {
          toastr.success('Usuário cadastrado.', 'Cadastro de Usuário');
          this.loaderService.stopLoader('global');
          this.router.navigate([this.returnUrl]);
        },
        () => {
          this.loaderService.stopLoader('global');
          toastr.error('Error ao cadastrar usuário, tente novamente mais tarde.', 'Cadastro de Usuário');
        });
  }

}
