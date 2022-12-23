import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesectionComponentComponent } from './artesection-component.component';

describe('ArtesectionComponentComponent', () => {
  let component: ArtesectionComponentComponent;
  let fixture: ComponentFixture<ArtesectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtesectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
