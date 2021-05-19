import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTaxComponent } from './day-tax.component';

describe('DayTaxComponent', () => {
  let component: DayTaxComponent;
  let fixture: ComponentFixture<DayTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
