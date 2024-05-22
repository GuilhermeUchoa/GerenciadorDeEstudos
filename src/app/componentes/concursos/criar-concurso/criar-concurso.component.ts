import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ConcursoService } from '../../../services/concursos/concurso.service';
import { Router } from '@angular/router';
import { Concurso } from '../../../interfaces/concursos/concurso';


@Component({
  selector: 'app-criar-concurso',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './criar-concurso.component.html',
  styleUrl: './criar-concurso.component.css'
})
export class CriarConcursoComponent {

  // formulario template
  nomeNovoConcurso:Concurso = {
    "nome": "",
  }

  constructor(private _ConcursoService:ConcursoService, private _Router:Router){}

  adicionarNovoConcurso():void{
    this._ConcursoService.criarConcurso(this.nomeNovoConcurso).subscribe()
    alert("Novo concurso criado")
    this._Router.navigate([''])
  }
}
