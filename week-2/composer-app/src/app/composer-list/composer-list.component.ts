/**
 * Title: about.component.ts
 * Author: Professor Krasso
 * Date: 14 July 2020
 * Modified by: Diandra McKenzie
 * Description: About component
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor (fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Duke Ellington", "Jazz"),
      new Composer("Miles Davis", "Jazz"),
      new Composer("John Coltrane", "Jazz"),
      new Composer("Thelonious Monk", "Jazz"),
      new Composer("Robert Glasper", "Jazz")
    ]
   }

  ngOnInit(): void {
  }

}
