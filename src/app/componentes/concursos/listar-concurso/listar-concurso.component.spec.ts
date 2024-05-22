import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConcursoComponent } from './listar-concurso.component';

describe('ListarConcursoComponent', () => {
  let component: ListarConcursoComponent;
  let fixture: ComponentFixture<ListarConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarConcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
