import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenosectionComponentComponent } from './disenosection-component.component';

describe('DisenosectionComponentComponent', () => {
  let component: DisenosectionComponentComponent;
  let fixture: ComponentFixture<DisenosectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenosectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisenosectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
