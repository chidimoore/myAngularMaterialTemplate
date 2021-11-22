import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterKycComponent } from './outer-kyc.component';

describe('OuterKycComponent', () => {
  let component: OuterKycComponent;
  let fixture: ComponentFixture<OuterKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
