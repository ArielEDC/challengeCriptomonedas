import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCantidadComponent } from './pantalla-cantidad.component';

describe('PantallaCantidadComponent', () => {
  let component: PantallaCantidadComponent;
  let fixture: ComponentFixture<PantallaCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaCantidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
