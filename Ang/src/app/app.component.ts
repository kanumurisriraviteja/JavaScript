import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Kanumuri Sri Ravi Teja';
  time: string;
  loadSpinner = false;

  constructor(private router: Router) {

    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loadSpinner = true;
      } else if (routerEvent instanceof NavigationEnd
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError) {
        this.loadSpinner = false;
      }
    });

  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);

  }
  ngOnInit(): void {
    console.log('OnInit in APP Component');
  }

}
