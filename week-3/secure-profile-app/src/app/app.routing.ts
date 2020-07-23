/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 22 July 2020
 * Modified by: Diandra McKenzie
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes= [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
