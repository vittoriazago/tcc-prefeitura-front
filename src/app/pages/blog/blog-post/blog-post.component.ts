import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoticiaModel } from 'src/app/shared/models/noticia.model';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent  implements OnInit {

  @Input() noticia: NoticiaModel;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private prefeituraService: PrefeituraService
  ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.id = id;
        console.log(id)
        this.pesquisaNoticia();
      }
      });
  }

  pesquisaNoticia() {
    this.prefeituraService.pesquisaNoticia(this.id)
      .subscribe(
        result => {
          this.noticia = result;
        }
    );
  }

}
