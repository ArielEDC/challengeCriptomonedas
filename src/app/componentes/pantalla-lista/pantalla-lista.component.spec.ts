import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaListaComponent } from './pantalla-lista.component';

describe('PantallaListaComponent', () => {
  let component: PantallaListaComponent;
  let fixture: ComponentFixture<PantallaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
