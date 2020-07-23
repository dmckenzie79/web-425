/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 22 July 2020
 * Modified by: Diandra McKenzie
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn= Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
