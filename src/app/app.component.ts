import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey guys</h1>
    <p>{{myObject.location}}</p>
    <ul>
      <li *ngFor="let arr of myArr">This is an for each {{arr}}</li>
      <li *ngIf="myArr">If (ngIF) ....Yes, I exist.</li>
      <li *ngIf="myArr2; else otherTmpl">Testing else.</li>
    </ul>
    <ng-template #otherTmpl>No, I do</ng-template>
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
  myArr2 = false;
}
