import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormingresoComponent } from './formingreso.component';

describe('FormingresoComponent', () => {
  let component: FormingresoComponent;
  let fixture: ComponentFixture<FormingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormingresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
