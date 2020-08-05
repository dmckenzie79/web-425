/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 4 August 2020
 * Modified By: Diandra McKenzie
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

