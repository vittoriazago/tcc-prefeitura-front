import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoConsultaComponent } from './agendamento-consulta/agendamento-consulta.component';

@NgModule({
  declarations: [
    AgendamentoConsultaComponent,
    AgendamentoCadastroComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AgendamentoCadastroComponent },
    ])
  ],
  exports: [
    AgendamentoConsultaComponent,
    AgendamentoCadastroComponent
  ],
  providers: [DatePipe]
})
export class AgendamentoModule { }
