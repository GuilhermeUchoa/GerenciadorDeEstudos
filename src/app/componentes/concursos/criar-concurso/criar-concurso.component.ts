import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
import { ConcursoService } from '../../../services/concursos/concurso.service';
import { Router } from '@angular/router';
import { Concurso } from '../../../interfaces/concursos/concurso';
import { MatCardModule } from '@angular/material/card';
import { Materia } from '../../../interfaces/materias/materia';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-criar-concurso',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './criar-concurso.component.html',
  styleUrl: './criar-concurso.component.css'
})
export class CriarConcursoComponent {

  // formulario template
  nomeNovoConcurso: Concurso = {
    "nome": "",
    "materias": []
  }

  constructor(private _ConcursoService: ConcursoService, private _Router: Router) { }

  adicionarNovoConcurso(form: NgForm): void {
    if (form.valid) {
      this.nomeNovoConcurso.nome = form.value["novoConcursoNome"]
      this._ConcursoService.criarConcurso(this.nomeNovoConcurso).subscribe()
      alert("Novo concurso criado")
      this._Router.navigate([''])
    }
  }

  addMateria(form: NgForm): void {
    if (form.valid) {

      let novaMateria: Materia = {
        id:"",
        nome: "",
        peso: 1,
        tempo:0,
        comentario: ""
      }

      novaMateria.nome = form.value["materiaNome"]
      novaMateria.peso = form.value["materiaPeso"]
      novaMateria.comentario = form.value["materiaComentario"]

      this.nomeNovoConcurso.materias?.push(novaMateria)
      console.log(this.nomeNovoConcurso.materias)

    }
  }


}
