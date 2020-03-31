import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { EmployeesModule } from './employees/employees.module';
import { ApplicationSharedResourcesModule } from './application-shared-resources.module';

import { GenericComponent } from './Custom/generic.component'; // this would like a global service

import { DataTransportService } from './Services/data-transport.service'; // this would like a global service

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Others/pagenotfound.component';
import { HttpInceptorProviders } from './intercept';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // here employee module contains the emplyee routing module. hence it must be present before the AppRoutingModule
    EmployeesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    ApplicationSharedResourcesModule
  ],
  exports: [],
  providers: [GenericComponent, DataTransportService, HttpInceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
