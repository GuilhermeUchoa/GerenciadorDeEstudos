import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarConcursoComponent } from './criar-concurso.component';

describe('CriarConcursoComponent', () => {
  let component: CriarConcursoComponent;
  let fixture: ComponentFixture<CriarConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarConcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
