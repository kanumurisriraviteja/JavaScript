import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Icar } from '../home/child/ICar';
import { Observable, of } from 'rxjs';
import { CarsService } from './cars.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingResolverService implements Resolve<Icar[] | string> {

  constructor(private cars: CarsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Icar[] | string> {
    return this.cars.GetMoreCars().pipe(
      catchError(err => of(err.message))
    );
  }
}
