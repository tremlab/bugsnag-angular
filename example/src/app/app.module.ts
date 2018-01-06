import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import bugsnagClient from './bugsnag';
import createPlugin from 'bugsnag-angular';

// This adds additinal functionality from bugsnag-angular to the basic client that was initialized with bugsnag-js in the file bugsang.ts
const BugsnagErrorHandler = bugsnagClient.use(createPlugin());

import { AppComponent } from './app.component';

// below is a basic manual notification to Bugsnag, akin to logging.
bugsnagClient.notify(new Error('Root module loaded.'), {
  // This notification would be sent with severity: 'warning' by default, but you can modify this (and many other) attribute before sending.
  severity: 'info'
  });

// for an even simpler notification, try:
// bugsnagClient.notify("Something");

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
