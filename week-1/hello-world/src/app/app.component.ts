/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 6 July 2020
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
  myWorld = "You are now in Diandra McKenzie's world!!";
}
