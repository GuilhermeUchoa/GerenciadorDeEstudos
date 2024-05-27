import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ConcursoService } from '../../../services/concursos/concurso.service';
import { Router } from '@angular/router';
import { Concurso } from '../../../interfaces/concursos/concurso';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Materia } from '../../../interfaces/materias/materia';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-editar-concurso',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './editar-concurso.component.html',
  styleUrl: './editar-concurso.component.css'
})
export class EditarConcursoComponent {

  panelOpenState = false;

  id: any

  materia: Materia = {
    id: "",
    nome: "string",
    peso: 0,
    tempo: 0,
    comentario: ""
  }

  concurso: any = {
    "id": "",
    "nome": "",
    "comentario":"",
    "materias": []
  }


  constructor(
    private _ConcursoService: ConcursoService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    this._ConcursoService.getConcurso(this.id).subscribe((data) => {
      this.concurso = data

    })

  }

  excluir(): void {
    this._ConcursoService.excluirConcurso(this.id).subscribe((data) => {
      alert('Este concurso sera excluido!!!')
      this._Router.navigate(['/'])
    })
  }

  atualizar(): void {
    this._ConcursoService.atualizarConcurso(this.id, this.concurso).subscribe(() => {
      alert("Atualizado com sucesso!!!")
      this._Router.navigate(['/'])
    })

  }


}
