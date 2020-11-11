import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaRotaComponent } from './guia-rota.component';

describe('GuiaRotaComponent', () => {
  let component: GuiaRotaComponent;
  let fixture: ComponentFixture<GuiaRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaRotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
