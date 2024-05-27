import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concurso } from '../../interfaces/concursos/concurso';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  private readonly linkApi: string = "http://localhost:3000/concurso"

  constructor(private _HttpClient: HttpClient) { }

  listarConcursos(): Observable<Concurso[]> {
    return this._HttpClient.get<Concurso[]>(this.linkApi)
  }

  criarConcurso(concurso: Concurso): Observable<Concurso> {
    return this._HttpClient.post<Concurso>(this.linkApi, concurso)
  }

  getConcurso(id:any): Observable<Concurso[]> {
    let linkGetConcurso:string = `${this.linkApi}/${id}`
    return this._HttpClient.get<Concurso[]>(linkGetConcurso)
  }

  editarConcurso(id:any, concurso:Concurso):Observable<Concurso>{
    let linkEditar:string = `${this.linkApi}/${id}`
    return this._HttpClient.put<Concurso>(linkEditar,concurso)
  }

  excluirConcurso(id:any):Observable<Concurso>{
    let linkExcluir:string = `${this.linkApi}/${id}`
    return this._HttpClient.delete<Concurso>(linkExcluir)
  }

  atualizarConcurso(id:any, concurso:Concurso):Observable<Concurso>{
    let linkAtualizar = `${this.linkApi}/${id}`
    return this._HttpClient.put<Concurso>(linkAtualizar,concurso)
  }

}
