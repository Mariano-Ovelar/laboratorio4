import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio02Component } from './ejercicio02.component';

describe('Ejercicio02Component', () => {
  let component: Ejercicio02Component;
  let fixture: ComponentFixture<Ejercicio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
