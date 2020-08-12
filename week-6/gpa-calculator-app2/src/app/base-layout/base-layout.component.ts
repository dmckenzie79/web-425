/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 11 August 2020
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

    this.assignment = 'Assignment 6.4 - Input Properties'
  }

  ngOnInit(): void {
  }

}
