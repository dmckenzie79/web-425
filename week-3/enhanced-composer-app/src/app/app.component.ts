/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 21 July 2020
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
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
