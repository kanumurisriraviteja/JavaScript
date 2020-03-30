import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { Icar } from './ICar';
import { CarsService } from '../../Services/cars.service';
import { CarsWebapiService } from '../../Services/cars-webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { retry, retryWhen, scan, delay } from 'rxjs/operators';
import { ApplicationSharedResourcesModule } from '../../application-shared-resources.module';
import { of } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [CarsService, CarsWebapiService]
})
export class ChildComponent implements OnInit, OnChanges {

  bsDatePickerConfig: any;

  // private carsserviceStatic : CarsService;
  constructor(private cars: CarsService, private carsWebapi: CarsWebapiService, private navigateroute: Router,
              private bootStrapDate: ApplicationSharedResourcesModule, private activate: ActivatedRoute) {
    // this.carsserviceStatic = new CarsService();//creating using new instead of DI.
    console.log('constructor in the child component');
    console.log(this.parentToChild); // undefined
    this.bsDatePickerConfig = bootStrapDate.bsGenericDatePickerConfig;
    this.moreCarsStatic = this.activate.snapshot.data.morecarsdata;
  }

  @Input()
  parentToChild: number;

  @Output()
  childToParent = new EventEmitter<any>();
  // Inteface:  typo no run time errors.
  carstatic: Icar[] = [];
  carsWebApi: Icar[] = [];

  messageStatus: boolean;
  message: string;
  domviewchild = '';
  moreCarsStatic: Icar[] = [];

  ngOnInit(): void {
    console.log('OnInit in the child component');

    //  this.carstatic = this.carsserviceStatic.GetCars();
    of(this.cars.GetCars()).subscribe((x) => {
      this.carstatic = x;
      // prefetching the data.
      this.moreCarsStatic.forEach((value) => {
        this.carstatic.push(value);
      });
      // if we implement using this approach then the controls are loaded and then the data is binded.
      // this.cars.GetMoreCars().subscribe((x) => {
      //   x.forEach((value) => {
      //     this.carstatic.push(value);
      //   });
      // });
    });

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
    this.childToParent.emit(this.carstatic);
  }


  CarsWebApi(): void {
    this.message = 'Data is Loading..';
    // This is an Observable
    this.carsWebapi.GetCarsWebApi().pipe(retryWhen(errors => {
      return errors.pipe(scan((rc) => {
        rc += 1;
        if (rc < 3) { this.message = 'Retrying' + rc; return rc; } else {
          this.message = 'error in returning from the service,please contact admin';
        }
      }, 0)).pipe(delay(1000));
    }
    )).subscribe((data) => {
      this.carsWebApi = data;
      this.carsWebapi.GetExpensiveCarsJsonServer().subscribe((x) => {
        x.forEach((value) => {
          this.carsWebApi.push(value);
        });
      });
    },
      (error) => {
        this.messageStatus = false;
        this.message = error;
      },
      () => {
        this.messageStatus = true;
        if (this.messageStatus) {
          this.message = 'loaded successfully';
        }
      });
    // .pipe(retry(10))
    // .pipe(retryWhen(delay(1000)))

    // This is a Promise.

    //  this.carsWebapi.GetCarsWebApiPromise().then( (data) => {
    //      this.carsWebApi = data
    //       this.messageStatus = true;
    //       if (this.messageStatus) {
    //       this.message = 'loaded successfully';
    //       }
    //     })
    //     .catch((error) => {
    //       this.messageStatus = false ;
    //       this.message = error;
    //     });
  }

  InsertCarsWebApi() {
    this.message = 'Inserting Car';
    const newCar: Icar = { Type: 'ford', Model: 5, Color: 'white' };

    this.carsWebapi.InsertCarWebApi(newCar).subscribe(data => this.carsWebApi = data,
      (error) => {
        this.messageStatus = false;
        this.message = error;
      },
      () => {
        this.messageStatus = true;
        if (this.messageStatus) {
          this.message = 'loaded successfully';
        }
      }
    );

  }
  UpdateCarsWebApi() {
    this.message = 'Updating Car';
    const newCar: Icar = { Type: 'Fieta', Model: 1, Color: 'Blue' };

    this.carsWebapi.UpdateCarWebApi(newCar).subscribe(data => this.carsWebApi = data,
      (error) => {
        this.messageStatus = false;
        this.message = error;
      },
      () => {
        this.messageStatus = true;
        if (this.messageStatus) {
          this.message = 'updated successfully';
        }
      }
    );

  }
  DeleteCarsWebApi() {
    this.message = 'Deleting Car';
    const newCar: Icar = { Type: '', Model: 3, Color: '' };

    this.carsWebapi.DeleteCarWebApi(newCar).subscribe(data => this.carsWebApi = data,
      (error) => {
        this.messageStatus = false;
        this.message = error;
      },
      () => {
        this.messageStatus = true;
        if (this.messageStatus) {
          this.message = 'Deleted successfully';
        }
      }
    );

  }

  ExpensiveCarsJsonServer(): void {
    this.message = 'Data is Loading..';
    this.carsWebapi.GetExpensiveCarsJsonServer().subscribe((x) => {
      x.forEach((value) => {
        this.carsWebApi.push(value);
      });
    },
    (error) => {
      this.messageStatus = false;
      this.message = error;
    },
    () => {
      this.messageStatus = true;
      if (this.messageStatus) {
        this.message = 'loaded successfully';
      }
    });
  }

  GoHome(): void {
    this.navigateroute.navigate(['/employee/create']);
  }
}
