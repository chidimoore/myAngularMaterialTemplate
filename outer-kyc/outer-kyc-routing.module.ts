import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterKycComponent } from './outer-kyc/outer-kyc.component';
import { MainComponent } from '../Main/main.component';
const routes: Routes =  [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    
    }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterKycRoutingModule { }
