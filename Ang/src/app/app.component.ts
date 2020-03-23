import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log('OnInit in APPComponent');
  }
  title:string = 'JavaScript Angular';
  srcPath:string='../assets/1.jpg';
  firstname :string ='teja';
  lastname :string='';
  fullname : string='';
  count : string[] =['kanumuri','sri','ravi','teja','sravanthi','vijaya','lakshmi','srinivasa','rao'];
  employeeCount : number;

  receivedFromChild : any;

  constructor(){
    console.log('constructor in the APP component');
    console.log(`${this.firstname}`);
  }

  btnClick() : void{
    this.employeeCount= this.count.length
   this.count.forEach((v,i,count)=>{console.log(v)});
   this.fullname = `My full name is ${this.firstname} ${this.lastname} `
  }

  GetOutputFromChild(input : any):void{
    this.receivedFromChild = input;
  }

  BooleanCondForIF(input : string): boolean{  
    return input.length%2==0 || input.length%3==0;
  }
}
