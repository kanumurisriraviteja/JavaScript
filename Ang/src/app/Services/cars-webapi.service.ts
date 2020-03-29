import { Injectable } from '@angular/core';
import {Icar} from '../home/child/ICar';
import { Observable } from 'rxjs';
import {GenericHttpService} from '../generic-http.service';


@Injectable()
export class CarsWebapiService {

  constructor(private genericHttp: GenericHttpService) { }

  GetCarsWebApi(): Observable<Icar[]> {
        // return [
        // { Type:"ford", Model:5, Color:"white" },
        // { Type:"city", Model:6, Color:"blue" },
        // { Type:"bmw", Model:7, Color:"green" },
        // { Type:"audi", Model:9, Color:"red" }
        //       ];

        // this is error and locks to the console.
        // return this._genericHttp.HttpGetService("https://localhost:44330/api/Values/GetCar1");

        return this.genericHttp.HttpGetService('Values/GetCar');
    }

    InsertCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpInsertService('Values/PostCar', car);
    }
    UpdateCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpEditService('Values/PutCar', car);
    }
    DeleteCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpDeleteService('Values/DeleteCar', car.Model);
    }

    GetCarsWebApiPromise(): Promise<any> {
      return this.genericHttp.HttpGetServicePromise('Values/GetCar');
    }

    GetExpensiveCarsJsonServer(): Observable<Icar[]> {
      return this.genericHttp.HttpGetServiceJsonServer('cars');
  }
}
