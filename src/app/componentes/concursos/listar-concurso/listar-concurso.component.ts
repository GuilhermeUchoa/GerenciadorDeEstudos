import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ConcursoService } from '../../../services/concursos/concurso.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterLink } from '@angular/router';
import { Materia } from '../../../interfaces/materias/materia';
import { Concurso } from '../../../interfaces/concursos/concurso';

@Component({
  selector: 'app-listar-concurso',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    RouterLink],
  templateUrl: './listar-concurso.component.html',
  styleUrl: './listar-concurso.component.css'
})
export class ListarConcursoComponent {

  concursos: Concurso[] = []
  getConcurso:any
  materia:Materia = {
    id:"",
    nome:"",
    peso:0,
    tempo:0,
    comentario:""
  }

  constructor(
    private _ConcursoService: ConcursoService,
    private _Router:Router
  ) { }

  ngOnInit() {
    this._ConcursoService.listarConcursos().subscribe((data) => {
      this.concursos = data
    })
  }

  criarMateria(id:any): void {
    this._ConcursoService.getConcurso(id).subscribe((data)=>{
      this.getConcurso = data
      this.getConcurso.materias.push(this.materia)
      
      this._ConcursoService.atualizarConcurso(id,this.getConcurso).subscribe(()=>{
        alert('materia criada, vamos mudar seu nome ?')
        this._Router.navigate([`concursoEditar/${id}`])
      })
    })
    
  }
}
