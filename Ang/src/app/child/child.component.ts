import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges,OnChanges } from '@angular/core';
import { Icar } from './ICar';
import {CarsService} from '../Services/cars.service';
import {CarsWebapiService} from '../Services/cars-webapi.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers :[CarsService,CarsWebapiService]
})
export class ChildComponent implements OnInit {

  constructor(private _cars: CarsService, private _carsWebapi : CarsWebapiService) { 
    console.log('constructor in the child component');
    console.log(this.parentToChild);// undefined
  }

  ngOnInit(): void 
  {
    this.car = this._cars.GetCars();
    console.log('OnInit in the child component');
  }

  @Input()
  parentToChild : number;
  
  @Output()
  childToParent = new EventEmitter<any>();
  // Inteface:  typo no run time errors.
  car : Icar[] = [];
  carsWebApi : Icar[] =[];

  messageStatus : boolean;
  message: string;

  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges in the child component');
    for (let propName in changes) 
    {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      console.log(`current name  is ${current} and previous name is ${prev}`);
    }
  }
    
  btnClick(): void {
    console.log(this.parentToChild);//data of the property

    // here on click of the button the event emitter is invoked.
    this.childToParent.emit(this.car);
  }

  CarsWebApi() : Icar[]
  { 
    this.message='Data is Loading..';
    
    this._carsWebapi.GetCarsWebApi().subscribe(data=> this.carsWebApi=data,
      (error)=>
      { 
        this.messageStatus =false ;
        this.message=error;
      },
      ()=>
      {
        this.messageStatus = true;
        if(this.messageStatus)
        this.message='loaded successfully';
      }
      );
    return this.carsWebApi;
  }
}