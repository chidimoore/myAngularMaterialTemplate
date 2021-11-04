import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTaxPayersRoutingModule } from './manage-tax-payers-routing.module';
import { RegisterTaxpayerComponent } from './register-taxpayer/register-taxpayer.component';

import { SharedModule } from '../shared/shared.module';
import { TaxpayerFormComponent } from './taxpayer-form/taxpayer-form.component';
@NgModule({
  declarations: [RegisterTaxpayerComponent, TaxpayerFormComponent],
  imports: [
    CommonModule,
    ManageTaxPayersRoutingModule,SharedModule
  ]
})
export class ManageTaxPayersModule { }
