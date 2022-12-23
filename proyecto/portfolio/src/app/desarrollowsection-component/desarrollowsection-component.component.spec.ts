import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrollowsectionComponentComponent } from './desarrollowsection-component.component';

describe('DesarrollowsectionComponentComponent', () => {
  let component: DesarrollowsectionComponentComponent;
  let fixture: ComponentFixture<DesarrollowsectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrollowsectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrollowsectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
