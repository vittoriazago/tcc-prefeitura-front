import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IptuConsultaComponent } from './iptu-consulta/iptu-consulta.component';
import { IptuDetalhesComponent } from './iptu-detalhes/iptu-detalhes.component';

@NgModule({
  declarations: [
    IptuConsultaComponent,
    IptuDetalhesComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IptuConsultaComponent },
      { path: 'detalhes', component: IptuDetalhesComponent },
    ])
  ],
  exports: [
    IptuConsultaComponent,
    IptuDetalhesComponent,
  ],
  providers: [DatePipe]
})
export class IptuModule { }
