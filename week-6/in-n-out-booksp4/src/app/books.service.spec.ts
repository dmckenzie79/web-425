/**
 * Title: books.service.spec.ts
 * Author: Professor Krasso
 * Date: 10 August 2020
 * Modified By: Diandra McKenzie
 * Description: Service class for book objects spec
 */


import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
