import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoResidenteComponent } from './nuevo-residente.component';

describe('NuevoResidenteComponent', () => {
  let component: NuevoResidenteComponent;
  let fixture: ComponentFixture<NuevoResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
