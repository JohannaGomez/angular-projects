import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey guys</h1>
    <p>{{myObject.location}}</p>
    <ul>
      <li *ngFor="let arr of myArr">This is an for each {{arr}}</li>
      <li *ngIf="myArr">If (ngIF) ....Yes, I exist.</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my angular app';
  myObject = {
    gender: 'female',
    age: 38,
    location: 'USA'
  };
  myArr = ['him', 'hers', 'yours'];
}
