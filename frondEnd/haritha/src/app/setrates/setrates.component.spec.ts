import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetratesComponent } from './setrates.component';

describe('SetratesComponent', () => {
  let component: SetratesComponent;
  let fixture: ComponentFixture<SetratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
