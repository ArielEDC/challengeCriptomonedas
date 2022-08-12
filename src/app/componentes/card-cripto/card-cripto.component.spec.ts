import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCriptoComponent } from './card-cripto.component';

describe('CardCriptoComponent', () => {
  let component: CardCriptoComponent;
  let fixture: ComponentFixture<CardCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
