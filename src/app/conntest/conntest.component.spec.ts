import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConntestComponent } from './conntest.component';

describe('ConntestComponent', () => {
  let component: ConntestComponent;
  let fixture: ComponentFixture<ConntestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConntestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConntestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
