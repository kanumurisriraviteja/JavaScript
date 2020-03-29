import { Injectable } from '@angular/core';
import { Icar } from '../home/child/ICar';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class CarsService {

    // TODO how to pass if needed.
    // constructor(c :number) {
    //     console.log('static car service is called'+c);
    // }

    GetCars(): Icar[] {
        return [
            { Type: 'ford', Model: 1, Color: 'white' },
            { Type: 'honda', Model: 2, Color: 'blue' },
            { Type: 'tata', Model: 3, Color: 'green' },
            { Type: 'toyota', Model: 4, Color: 'red' }
        ];
    }
    GetMoreCars(): Observable<Icar[]> {

        const cars: Icar[] =
            [
                { Type: 'bmw', Model: 5, Color: 'white' },
                { Type: 'audi', Model: 6, Color: 'blue' }
            ];

        return of(cars).pipe(delay(500));
    }
}
