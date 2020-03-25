import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';
import { HomeModule } from './home/home.module';
import {ApplicationSharedResourcesModule} from './Custom/application-shared-resources.module';

import { CustomDirective } from './Others/custom.directive';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './Others/pagenotfound.component';
import {HomeComponent} from './Others/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TestModule,
    HomeModule,
    ApplicationSharedResourcesModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
