import { Injectable } from '@angular/core';
import {Icar} from "../first/ICar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class CarsWebapiService {

  constructor(private _http : HttpClient) { }

  GetCarsWebApi() : Observable<Icar[]> 
    {
        // return [
        // { Type:"ford", Model:1, Color:"white" },
        // { Type:"city", Model:2, Color:"blue" },
        // { Type:"bmw", Model:3, Color:"green" },
        // { Type:"audi", Model:4, Color:"red" }
        //       ];

        return this._http.get<Icar[]>("https://localhost:44330/api/Values/GetCar");
    }

}
