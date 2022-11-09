import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { DisplayPageComponent } from './components/display-page/display-page.component'
import { CreationPageCustomerComponent } from './components/creation-page-customer/creation-page-customer.component';
import { DisplayPageCustomerComponent } from './components/display-page-customer/display-page-customer.component'

const routes: Routes = [
  {path: 'display_branches', component: DisplayPageComponent},
  {path: 'display_customers', component: DisplayPageCustomerComponent},
  {path: 'create_branch', component: CreationPageComponent},
  {path: 'create_customer', component: CreationPageCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
