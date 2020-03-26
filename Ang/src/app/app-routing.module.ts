import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent} from './Others/pagenotfound.component';
import {ParentComponent} from './home/parent/parent.component';
import {CreateEmloyeeComponent} from './employees/create-emloyee/create-emloyee.component';

const routes: Routes =
[
  {path: 'home', component: ParentComponent},
  {path: 'create', component: CreateEmloyeeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // (routes,{ useHash: true})
  exports: [RouterModule]
})
export class AppRoutingModule { }
