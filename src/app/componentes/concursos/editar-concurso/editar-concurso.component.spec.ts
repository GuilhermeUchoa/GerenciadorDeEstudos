import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConcursoComponent } from './editar-concurso.component';

describe('EditarConcursoComponent', () => {
  let component: EditarConcursoComponent;
  let fixture: ComponentFixture<EditarConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
