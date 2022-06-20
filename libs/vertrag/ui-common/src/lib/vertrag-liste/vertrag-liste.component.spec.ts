import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragListeComponent } from './vertrag-liste.component';

describe('VertragListeComponent', () => {
  let component: VertragListeComponent;
  let fixture: ComponentFixture<VertragListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertragListeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
