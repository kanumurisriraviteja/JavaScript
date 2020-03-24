import { Injectable } from '@angular/core';
import {Icar} from "../first/ICar";

@Injectable()
export class CarsService
{
    GetCars() : Icar[] 
    {
        return [
        { Type:"ford", Model:1, Color:"white" },
        { Type:"city", Model:2, Color:"blue" },
        { Type:"bmw", Model:3, Color:"green" },
        { Type:"audi", Model:4, Color:"red" }
              ];
    }
}