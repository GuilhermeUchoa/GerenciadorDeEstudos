import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverConcursoComponent } from './remover-concurso.component';

describe('RemoverConcursoComponent', () => {
  let component: RemoverConcursoComponent;
  let fixture: ComponentFixture<RemoverConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoverConcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoverConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
