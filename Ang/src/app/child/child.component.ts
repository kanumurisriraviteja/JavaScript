import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Icar } from './ICar';
import {CarsService} from '../Services/cars.service';
import {CarsWebapiService} from '../Services/cars-webapi.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers : [CarsService, CarsWebapiService]
})
export class ChildComponent implements OnInit, OnChanges {

  constructor(private cars: CarsService, private carsWebapi: CarsWebapiService) {
    console.log('constructor in the child component');
    console.log(this.parentToChild); // undefined
  }

  @Input()
  parentToChild: number;

  @Output()
  childToParent = new EventEmitter<any>();
  // Inteface:  typo no run time errors.
  car: Icar[] = [];
  carsWebApi: Icar[] = [];

  messageStatus: boolean;
  message: string;

  ngOnInit(): void {
    this.car = this.cars.GetCars();
    console.log('OnInit in the child component');
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges in the child component');
    for (const propName in changes) {
      const change = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      console.log(`current name  is ${current} and previous name is ${prev}`);
    }
  }

  btnClick(): void {
    console.log(this.parentToChild); // data of the property

    // here on click of the button the event emitter is invoked.
    this.childToParent.emit(this.car);
  }

  CarsWebApi(): Icar[] {
    this.message = 'Data is Loading..';

    this.carsWebapi.GetCarsWebApi().subscribe(data => this.carsWebApi = data,
      (error) => {
        this.messageStatus = false ;
        this.message = error;
      },
      () => {
        this.messageStatus = true;
        if (this.messageStatus) {
        this.message = 'loaded successfully';
        }
      }
      );
    return this.carsWebApi;
  }
}
