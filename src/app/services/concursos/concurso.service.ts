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

}
