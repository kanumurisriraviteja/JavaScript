import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Others/pagenotfound.component';
import { ParentComponent } from './home/parent/parent.component';
import { CreateEmloyeeComponent } from './employees/create-emloyee/create-emloyee.component';
import { MoreEmployeeDetailsComponent } from './employees/more-employee-details/more-employee-details.component';
import { CanDeactiveCreateEmployeeGuard } from './employees/can-deactive-create-employee.guard';
import { LoadingResolverService } from './Services/loading-resolver.service';

const routes: Routes =
  [
    {
      path: 'home', component: ParentComponent,
      resolve: { morecarsdata: LoadingResolverService }
    },
    {
      path: 'create', component: CreateEmloyeeComponent
    }, // , canDeactivate :[CanDeactiveCreateEmployeeGuard]
    {
      path: 'more', component: MoreEmployeeDetailsComponent  // 'more/:name' only few params
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // (routes,{ useHash: true ,enableTracing: true})
  exports: [RouterModule]
})
export class AppRoutingModule { }
