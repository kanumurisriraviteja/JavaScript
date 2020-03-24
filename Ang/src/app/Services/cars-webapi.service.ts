import { Injectable } from '@angular/core';
import {Icar} from '../child/ICar';
import { Observable } from 'rxjs';
import {GenericHttpService} from './generic-http.service';


@Injectable()
export class CarsWebapiService {

  constructor(private _genericHttp: GenericHttpService) { }

  GetCarsWebApi(): Observable<Icar[]> {
        // return [
        // { Type:"ford", Model:1, Color:"white" },
        // { Type:"city", Model:2, Color:"blue" },
        // { Type:"bmw", Model:3, Color:"green" },
        // { Type:"audi", Model:4, Color:"red" }
        //       ];

        // this is error and locks to the console.
        // return this._genericHttp.HttpGetService("https://localhost:44330/api/Values/GetCar1");

        return this._genericHttp.HttpGetService('https://localhost:44330/api/Values/GetCar');
    }
}
