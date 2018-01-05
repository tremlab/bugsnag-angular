import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import bugsnagClient from './bugsnag';
import createPlugin from 'bugsnag-angular';

const BugsnagErrorHandler = bugsnagClient.use(createPlugin());

import { AppComponent } from './app.component';

// below is the simplest notification syntax, akin to logging.
bugsnagClient.notify(new Error('Root module loaded.'));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: ErrorHandler, useClass: BugsnagErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
