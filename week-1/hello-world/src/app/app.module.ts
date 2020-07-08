/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 7 July 2020
 * Modified By: Diandra McKenzie
 * Description: App module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
