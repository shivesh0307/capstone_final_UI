import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DisplayPageCustomerComponent } from './components/display-page-customer/display-page-customer.component';
import { CreationPageCustomerComponent } from './components/creation-page-customer/creation-page-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    CreationPageComponent,
    DisplayPageCustomerComponent,
    CreationPageCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
