import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { EmployeesModule } from './employees/employees.module';
import { ApplicationSharedResourcesModule } from './application-shared-resources.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Others/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    EmployeesModule,
    ApplicationSharedResourcesModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
