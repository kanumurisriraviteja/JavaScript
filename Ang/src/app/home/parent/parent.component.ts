import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {

  constructor() {
    console.log('constructor in the PARENT component');
    console.log(`${this.firstname}`);
  }
  ngAfterViewChecked(): void {
    // console.log('///////////////////////ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    // console.log('*********************ngAfterContentChecked');
  }

  @ViewChild('manipulate') parentdomelement: ElementRef;
  // @ViewChild('domchild1', { static: false }) childdomelement: ElementRef;
  // @ViewChild(ChildComponent, { static: false }) childFullDom: ChildComponent;

  srcPath = '../assets/1.jpg';
  firstname = 'teja';
  lastname = '';
  fullname = '';
  count: string[] = ['kanumuri', 'sri', 'ravi', 'teja', 'sravanthi', 'vijaya', 'lakshmi', 'srinivasa', 'rao'];
  employeeCount: number;

  receivedFromChild: any;
  ngAfterContentInit(): void {
    // console.log('------------------' + this.childFullDom);
  }

  ngAfterViewInit(): void {
    this.parentdomelement.nativeElement.innerText = 'This is Parent Component';
    // TODO this.childdomelement.nativeElement.innerText = '--';
    // this.childFullDom.domviewchild = 'This is the data passed from parent to the child :';
  }

  ngOnInit(): void {
    console.log('OnInit in PARENT Component');
  }

  btnClick(): void {
    this.employeeCount = this.count.length;
    this.count.forEach((v, i, count) => { console.log(v); });
    this.fullname = `My full name is ${this.firstname} ${this.lastname} `;
  }

  GetOutputFromChild(input: any): void {
    this.receivedFromChild = input;
  }

  BooleanCondForIF(input: string): boolean {
    return input.length % 2 === 0 || input.length % 3 === 0;
  }

}
