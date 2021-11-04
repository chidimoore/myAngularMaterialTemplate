import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaxpayerComponent } from './register-taxpayer.component';

describe('RegisterTaxpayerComponent', () => {
  let component: RegisterTaxpayerComponent;
  let fixture: ComponentFixture<RegisterTaxpayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTaxpayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaxpayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
