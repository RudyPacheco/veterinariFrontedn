import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroEsterilizacionComponent } from './regitro-esterilizacion.component';

describe('RegitroEsterilizacionComponent', () => {
  let component: RegitroEsterilizacionComponent;
  let fixture: ComponentFixture<RegitroEsterilizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegitroEsterilizacionComponent]
    });
    fixture = TestBed.createComponent(RegitroEsterilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
