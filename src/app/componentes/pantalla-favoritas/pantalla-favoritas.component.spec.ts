import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaFavoritasComponent } from './pantalla-favoritas.component';

describe('PantallaFavoritasComponent', () => {
  let component: PantallaFavoritasComponent;
  let fixture: ComponentFixture<PantallaFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaFavoritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
