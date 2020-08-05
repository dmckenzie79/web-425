/**
 * Title: main.ts
 * Author: Professor Krasso
 * Date: 4 August 2020
 * Modified By: Diandra McKenzie
 * Description: Main file
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
