import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Property binding: interpolation (value is a string), wrapping, reappend bind- behind the element attribute</h1>
    <img src="{{angularLogo}}">
    <img [src]="angularLogo">
    <img bind-src="angularLogo">
    <button [disabled]="buttonStatus =='enabled'">My Button</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
  buttonStatus = 'enabled';
}
