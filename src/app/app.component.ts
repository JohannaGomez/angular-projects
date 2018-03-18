import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey guys</h1>
    <div><li *ngIf="myArr; then tmpl1 else tmpl2"></li></div>
    <ng-template #tmpl1>Truth</ng-template>
    <ng-template #tmpl2>False</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr = true;
}
