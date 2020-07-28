/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 27 July 2020
 * Modified by: Diandra McKenzie
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.3 - Handling Events and Observables';
}
