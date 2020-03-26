import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit {

  title = 'Kanumuri Sri Ravi Teja';
  time: string;

  ngAfterViewInit(): void {
    setInterval(() => {
      this.time  = new Date().toLocaleTimeString();
    }, 1000);

  }
  ngOnInit(): void {
    console.log('OnInit in APP Component');
  }

}
