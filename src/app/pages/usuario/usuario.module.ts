import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

@NgModule({
  declarations: [
    UsuarioCadastroComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'cadastro', component: UsuarioCadastroComponent },
    ])
  ],
  exports: [
    UsuarioCadastroComponent,
  ],
  providers: [DatePipe]
})
export class UsuarioModule { }
