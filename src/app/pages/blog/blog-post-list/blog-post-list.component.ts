import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NoticiaModel } from 'src/app/shared/models/noticia.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

import * as toastr from 'toastr';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent  implements OnInit {

  noticias: NoticiaModel[] = [];

  constructor(
    private prefeituraService: PrefeituraService,
    private readonly loaderService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.pesquisaNoticias(1, 10);
  }

  pesquisaNoticias(numeroPagina: number, tamanhoPagina: number) {

    this.loaderService.startLoader('global');
    this.prefeituraService.pesquisaNoticias(numeroPagina, tamanhoPagina, '')
      .subscribe(
        result => {
          this.noticias = result;
          this.loaderService.stopLoader('global');
        }, () => {
          this.loaderService.stopLoader('global');
          toastr.error('Error ao recuperar notícias', 'Notícias');
        });
  }
}
