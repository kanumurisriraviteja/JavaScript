import { Injectable } from '@angular/core';
import {Icar} from '../home/child/ICar';

@Injectable()
export class CarsService {

    // TODO how to pass if needed.
    // constructor(c :number) {
    //     console.log('static car service is called'+c);
    // }

    GetCars(): Icar[] {
        return [
                    { Type: 'ford', Model: 1, Color: 'white' },
                    { Type: 'city', Model: 2, Color: 'blue' },
                    { Type: 'bmw', Model: 3, Color: 'green' },
                    { Type: 'audi', Model: 4, Color: 'red' }
              ];
    }
}
