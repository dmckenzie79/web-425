/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * Date: 11 August 2020
 * Modified By: Diandra McKenzie
 * Description: Grade Summary App component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
