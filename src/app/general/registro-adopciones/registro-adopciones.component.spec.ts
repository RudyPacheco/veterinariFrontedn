import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAdopcionesComponent } from './registro-adopciones.component';

describe('RegistroAdopcionesComponent', () => {
  let component: RegistroAdopcionesComponent;
  let fixture: ComponentFixture<RegistroAdopcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAdopcionesComponent]
    });
    fixture = TestBed.createComponent(RegistroAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
