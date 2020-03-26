import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('OnInit in APP Component');
    // setTimeout(this.GetCurrentTime,1000)
  }
  title : string = 'Kanumuri Sri Ravi Teja';
  time : string = new Date().toLocaleTimeString();

  // GetCurrentTime()  {
  //   this.time= new Date().toLocaleTimeString();
  // }

}
