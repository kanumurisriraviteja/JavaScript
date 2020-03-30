import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // here employee module contains the emplyee routing module. hence it must be presnt before the AppRoutingModule
    EmployeesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    ApplicationSharedResourcesModule
  ],
  exports: [],
  providers: [GenericComponent, DataTransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
