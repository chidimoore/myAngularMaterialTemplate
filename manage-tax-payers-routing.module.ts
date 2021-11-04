import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterTaxpayerComponent } from './register-taxpayer/register-taxpayer.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { TaxpayerFormComponent } from './taxpayer-form/taxpayer-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: RegisterTaxpayerComponent},
      { path: 'taxpayerForm', component: TaxpayerFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTaxPayersRoutingModule { }
