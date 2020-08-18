/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * Date: 11 August 2020
 * Modified By: Diandra McKenzie
 * Description: GPA App component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;


  constructor() { }

  ngOnInit(): void {
  }

}
