import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from './Others/pagenotfound.component';
import { ParentComponent } from './home/parent/parent.component';
import { LoadingResolverService } from './Services/loading-resolver.service';
// import {EmployeesModule} from './employees/employees.module';


const routes: Routes =
  [
    {
      path: 'home', component: ParentComponent,
      resolve: { morecarsdata: LoadingResolverService }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'employee', loadChildren: './employees/employees.module#EmployeesModule'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], // (routes,{ useHash: true ,enableTracing: true, { preloadingStrategy: PreloadAllModules|NoPreloading }})
  exports: [RouterModule]
})
export class AppRoutingModule { }
