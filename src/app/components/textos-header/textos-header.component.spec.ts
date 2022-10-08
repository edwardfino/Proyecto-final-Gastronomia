import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextosHeaderComponent } from './textos-header.component';

describe('TextosHeaderComponent', () => {
  let component: TextosHeaderComponent;
  let fixture: ComponentFixture<TextosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextosHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
