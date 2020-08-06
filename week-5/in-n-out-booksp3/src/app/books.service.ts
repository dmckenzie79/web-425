/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 4 August 2020
 * Modified By: Diandra McKenzie
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '978-0-9409-8510-0',
        title: 'Back to Eden',
        description: 'The classic guide to Herbal Medicine, Natural Foods and Home Remedies since 1939',
        numOfPages: 886,
        authors: ['Jethro Kloss']
      },
      {
        isbn: '0-8129-2483-5',
        title: 'No Disrespect',
        description: "Autobiography and devotional to loved ones",
        numOfPages: 361,
        authors: ['Sister Souljah']
      },
      {
        isbn: '1-56352-554-2',
        title: 'Callus On My Soul',
        description: "Memoir of some of the life experiences of Dick Gregory",
        numOfPages: 301,
        authors: ['Dick Gregory', 'Sheila P. Moss']
      },
      {
        isbn: '0-688-14047-5',
        title: 'The Selected Poems of Nikki Giovanni',
        description: "Poems. Selections",
        numOfPages: 287,
        authors: ['Nikki Giovanni']
      },
      {
        isbn: '0-679-72818-X',
        title: 'Selected Poems of Langston Hughes',
        description: "Poems. Selections",
        numOfPages: 297,
        authors: ['Langston Hughes']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
