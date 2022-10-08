import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoFuerteComponent } from './plato-fuerte.component';

describe('PlatoFuerteComponent', () => {
  let component: PlatoFuerteComponent;
  let fixture: ComponentFixture<PlatoFuerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatoFuerteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatoFuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
