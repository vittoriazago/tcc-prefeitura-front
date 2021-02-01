import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioCadastroModel } from 'src/app/shared/models/usuario-cadastro.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  cadastroUsuarioForm: FormGroup;
  returnUrl = 'login';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private prefeituraService: PrefeituraService
  ) { }

  ngOnInit() {

    this.cadastroUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      telefone: ['', []]
    });
  }
  get f() {
    return this.cadastroUsuarioForm.controls;
  }

  cadastrarUsuario() {
    if (this.cadastroUsuarioForm.invalid) {
      return;
    }

    const bodyCadastroUsuario: UsuarioCadastroModel = {
      Nome: this.f.nome.value,
      Documento: this.f.documento.value,
      Email: this.f.email.value,
      Senha: this.f.senha.value,
    };
    // this.loaderService.startLoader('global');
    this.prefeituraService.postUsuario(bodyCadastroUsuario)
      .pipe(
        //finalize(() => this.loaderService.stopLoader('global'))
      )
      .subscribe(
        () => {
          // toastr.success('E-mail para recuperar senha foi enviado.', 'Esqueci Senha');
          this.router.navigate([this.returnUrl]);
        },
        () =>
          console.log('Erro')
    // toastr.error('Error ao tentar recuperar senha.', 'Esqueci Senha');
    );
  }

}
