import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent} from './Others/home.component';
import { PageNotFoundComponent} from './Others/pagenotfound.component';
import { FirsttestComponent } from './test/firsttest/firsttest.component';

const routes: Routes =
[
  {path: 'home', component: HomeComponent},
  {path: 'pc', component: ParentComponent},
  {path: 'ft', component: FirsttestComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // (routes,{ useHash: true})
  exports: [RouterModule]
})
export class AppRoutingModule { }
