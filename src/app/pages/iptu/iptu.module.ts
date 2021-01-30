import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IptuConsultaComponent } from './iptu-consulta/iptu-consulta.component';

@NgModule({
  declarations: [
    IptuConsultaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IptuConsultaComponent },
    ])
  ],
  exports: [
    IptuConsultaComponent,
  ],
  providers: [DatePipe]
})
export class IptuModule { }
