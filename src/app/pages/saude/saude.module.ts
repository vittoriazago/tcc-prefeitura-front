import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SaudeProntuarioComponent } from './saude-prontuario/saude-prontuario.component';

@NgModule({
  declarations: [
    SaudeProntuarioComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'saude', component: SaudeProntuarioComponent },
    ])
  ],
  exports: [
    SaudeProntuarioComponent,
  ],
  providers: [DatePipe]
})
export class SaudeModule { }
