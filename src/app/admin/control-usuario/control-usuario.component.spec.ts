import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUsuarioComponent } from './control-usuario.component';

describe('ControlUsuarioComponent', () => {
  let component: ControlUsuarioComponent;
  let fixture: ComponentFixture<ControlUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlUsuarioComponent]
    });
    fixture = TestBed.createComponent(ControlUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
