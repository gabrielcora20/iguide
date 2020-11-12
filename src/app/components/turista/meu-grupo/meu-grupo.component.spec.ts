import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuGrupoComponent } from './meu-grupo.component';

describe('MeuGrupoComponent', () => {
  let component: MeuGrupoComponent;
  let fixture: ComponentFixture<MeuGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
