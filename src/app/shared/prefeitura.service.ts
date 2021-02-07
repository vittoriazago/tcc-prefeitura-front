import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaModel } from './models/noticia.model';
import { Observable } from 'rxjs';
import { UsuarioCadastroModel } from './models/usuario-cadastro.model';
import { UsuarioLoginModel } from './models/usuario-login.model';
import { UsuarioLogadoModel } from './models/usuario-logado.model';

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

  postUsuarioLogin(bodyLoginUsuario: UsuarioLoginModel) {
    return this.httpClient.post<UsuarioLogadoModel>(`${this.baseUrl}usuario/login`, bodyLoginUsuario);
  }

  pesquisaIptu(documento: string) {
    // pesquisa mockada
    return this.httpClient.get<NoticiaModel[]>(`${this.baseUrl}noticias?numeroPagina=${1}&tamanhoPagina=${1}`);
  }

  pesquisaNoticias(numeroPagina: number, tamanhoPagina: number, data: string): Observable<NoticiaModel[]> {
    return this.httpClient.get<NoticiaModel[]>(`${this.baseUrl}noticias?numeroPagina=${numeroPagina}&tamanhoPagina=${tamanhoPagina}`);
  }

  pesquisaNoticia(id: string): Observable<NoticiaModel> {
    return this.httpClient.get<NoticiaModel>(`${this.baseUrl}noticias/${id}`);
  }
}
