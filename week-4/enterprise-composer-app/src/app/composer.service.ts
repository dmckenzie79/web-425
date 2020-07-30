/**
 * Title: composer.service.ts
 * Author: Professor Krasso
 * Date: 27 July 2020
 * Modified by: Diandra McKenzie
 * Description: Composer Service File
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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

  getComposers(): Observable <IComposer[]> {
    return of (this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of (this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
