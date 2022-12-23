import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesindiceComponentComponent } from './botonesindice-component.component';

describe('BotonesindiceComponentComponent', () => {
  let component: BotonesindiceComponentComponent;
  let fixture: ComponentFixture<BotonesindiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesindiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesindiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
