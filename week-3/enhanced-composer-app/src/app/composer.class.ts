/**
 * Title: composer.class.ts
 * Author: Professor Krasso
 * Date: 21 July 2020
 * Modified by: Diandra McKenzie
 * Description: Composer Class
 */

import { IComposer } from './composer.interface';

export class Composer {

  composers: Array<IComposer>;

  constructor () {
    this.composers = [
      {composerId: 1, fullName: "Duke Ellington", genre: "Jazz"},
      {composerId: 2, fullName: "Miles Davis", genre: "Jazz"},
      {composerId: 3, fullName: "John Coltrane", genre: "Jazz"},
      {composerId: 4, fullName: "Thelonious Monk", genre: "Jazz"},
      {composerId: 5, fullName: "Robert Glasper", genre: "Jazz"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}



