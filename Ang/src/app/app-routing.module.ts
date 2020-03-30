import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Others/pagenotfound.component';
import { ParentComponent } from './home/parent/parent.component';
import { LoadingResolverService } from './Services/loading-resolver.service';


const routes: Routes =
  [
    {
      path: 'home', component: ParentComponent,
      resolve: { morecarsdata: LoadingResolverService }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {
    //   path : 'employee',loadChildren :'./employees/employees.module#EmployeesModule'
    // },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // (routes,{ useHash: true ,enableTracing: true})
  exports: [RouterModule]
})
export class AppRoutingModule { }
