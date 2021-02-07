import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-iptu-detalhes',
  templateUrl: './iptu-detalhes.component.html',
  styleUrls: ['./iptu-detalhes.component.css']
})
export class IptuDetalhesComponent {

  iptuDetalhes: any;
  opcoesPagamento = new Array();

  constructor() {
    this.iptuDetalhes = {
      nome: 'Mariete de Souza Barros',
      documento: '493.122.654-22',
      ano: '2021',
      logradouro: 'Rua Carlos Filho 3-40, Centro',
      cep: '17129-001',
      tipo: 'CASA',
      valor: 225,
    };

    const hoje = moment();
    for (let i = 1; i <= 3; i++) {
      // simula juros fake
      const novoValor = this.iptuDetalhes.valor + ((i - 1) * 1.8);
      this.opcoesPagamento.push({
        quantidade: i,
        valorParcela: (novoValor / i),
        valorTotal: novoValor,
        dataVencimento: hoje.add(1, 'months').format()
      });
    }
  }
}
