import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ConcursoService } from '../../../services/concursos/concurso.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

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

  concursos: any

  constructor(private _ConcursoService: ConcursoService) { }

  ngOnInit() {
    this._ConcursoService.listarConcursos().subscribe((data) => {
      this.concursos = data
    })
  }
}
