import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsterilizacionComponent } from './esterilizacion.component';

describe('EsterilizacionComponent', () => {
  let component: EsterilizacionComponent;
  let fixture: ComponentFixture<EsterilizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsterilizacionComponent]
    });
    fixture = TestBed.createComponent(EsterilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
