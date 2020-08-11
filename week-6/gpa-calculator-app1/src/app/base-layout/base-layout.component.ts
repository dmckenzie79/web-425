/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 10 August 2020
 * Modified By: Diandra McKenzie
 * Description: Base Layout App component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  assignment : string;

  constructor() {

    this.assignment = 'Exercise 6.3 - Layouts'
  }

  ngOnInit(): void {
  }

}
