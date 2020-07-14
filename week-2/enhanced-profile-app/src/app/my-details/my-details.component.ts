/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 13 July 2020
 * Modified By: Diandra McKenzie
 * Description: My details component (Details view)
 */

import { Component, OnInit } from '@angular/core';

export default class Person{
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {

    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString () {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite Food: ${this.favoriteFood}\n  Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Diandra McKenzie", "Seafood", "Iridescent Rose Gold");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
