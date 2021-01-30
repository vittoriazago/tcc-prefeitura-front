import { Component, OnInit } from '@angular/core';
import { NoticiaModel } from 'src/app/shared/models/noticia.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent  implements OnInit {

  noticias: NoticiaModel[] = [];

  constructor(
    private prefeituraService: PrefeituraService
  ) { }

  ngOnInit() {
    this.pesquisaNoticias(1, 10);
  }

  pesquisaNoticias(numeroPagina: number, tamanhoPagina: number) {
    this.prefeituraService.pesquisaNoticias(numeroPagina, tamanhoPagina, '')
      .subscribe(
        result => {
          this.noticias = result;
        }
    );
  }
}
