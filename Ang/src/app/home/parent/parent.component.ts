import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {
    console.log('constructor in the PARENT component');
    console.log(`${this.firstname}`);
   }
   
  srcPath = '../assets/1.jpg';
  firstname = 'teja';
  lastname = '';
  fullname = '';
  count: string[] = ['kanumuri', 'sri', 'ravi', 'teja', 'sravanthi', 'vijaya', 'lakshmi', 'srinivasa', 'rao'];
  employeeCount: number;

  receivedFromChild: any;

  ngOnInit(): void {
    console.log('OnInit in PARENT Component');
  }

  btnClick(): void {
    this.employeeCount = this.count.length;
    this.count.forEach((v, i, count) => {console.log(v); });
    this.fullname = `My full name is ${this.firstname} ${this.lastname} `;
  }

  GetOutputFromChild(input: any): void {
    this.receivedFromChild = input;
  }

  BooleanCondForIF(input: string): boolean {
    return input.length % 2 === 0 || input.length % 3 === 0;
  }

}
