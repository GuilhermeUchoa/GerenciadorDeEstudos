import { Routes } from '@angular/router';
import { ListarConcursoComponent } from './componentes/concursos/listar-concurso/listar-concurso.component';
import { CriarConcursoComponent } from './componentes/concursos/criar-concurso/criar-concurso.component';
import { EditarConcursoComponent } from './componentes/concursos/editar-concurso/editar-concurso.component';
import { RemoverConcursoComponent } from './componentes/concursos/remover-concurso/remover-concurso.component';

export const routes: Routes = [

    { path: '', component: ListarConcursoComponent },
    { path: 'concursoCriar', component: CriarConcursoComponent },
    { path: 'concursoEditar', component: EditarConcursoComponent },
    { path: 'concursoRemover', component: RemoverConcursoComponent }


];
