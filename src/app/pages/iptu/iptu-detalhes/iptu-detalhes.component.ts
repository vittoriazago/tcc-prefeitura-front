import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IptuDetalhesModel } from 'src/app/shared/models/iptu-detalhes.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

import * as toastr from 'toastr';
@Component({
  selector: 'app-iptu-detalhes',
  templateUrl: './iptu-detalhes.component.html',
  styleUrls: ['./iptu-detalhes.component.css']
})
export class IptuDetalhesComponent implements OnInit {

  iptuDetalhes: IptuDetalhesModel;

  constructor(
    private readonly loaderService: NgxUiLoaderService,
    private prefeituraService: PrefeituraService) {
  }
  ngOnInit(): void {
    this.loaderService.startLoader('global');

    this.prefeituraService.pesquisaIptu('mock')
      .subscribe(result => {
        this.iptuDetalhes = result;
        this.loaderService.stopLoader('global');
      },
      () => {
        toastr.error('Error ao consultar iptu, verifique seu documento ou tente novamente mais tarde.', 'Consulta de IPTU');
        this.loaderService.stopLoader('global');
      });
  }
}
