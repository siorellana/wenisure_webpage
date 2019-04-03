import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Privado2Component } from './privado2.component';

describe('Privado2Component', () => {
  let component: Privado2Component;
  let fixture: ComponentFixture<Privado2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Privado2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Privado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
