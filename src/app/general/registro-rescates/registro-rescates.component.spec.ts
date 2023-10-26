import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRescatesComponent } from './registro-rescates.component';

describe('RegistroRescatesComponent', () => {
  let component: RegistroRescatesComponent;
  let fixture: ComponentFixture<RegistroRescatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroRescatesComponent]
    });
    fixture = TestBed.createComponent(RegistroRescatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
