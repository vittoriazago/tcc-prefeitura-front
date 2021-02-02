import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaModel } from './models/noticia.model';
import { Observable } from 'rxjs';
import { UsuarioCadastroModel } from './models/usuario-cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class PrefeituraService {
  // todo: move to enviroment
  baseUrl = 'https://prefeitura-geral-api.herokuapp.com/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  postUsuario(bodyCadastroUsuario: UsuarioCadastroModel) {
    return this.httpClient.post(`${this.baseUrl}usuario`, bodyCadastroUsuario);
  }

  pesquisaNoticias(numeroPagina: number, tamanhoPagina: number, data: string): Observable<NoticiaModel[]> {
    return this.httpClient.get<NoticiaModel[]>(`${this.baseUrl}noticias?numeroPagina=${numeroPagina}&tamanhoPagina=${tamanhoPagina}`);
  }

  pesquisaNoticia(id: string): Observable<NoticiaModel> {
    return this.httpClient.get<NoticiaModel>(`${this.baseUrl}noticias/${id}`);
  }
}
