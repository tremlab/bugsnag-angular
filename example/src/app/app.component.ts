import { Component } from '@angular/core';
import bugsnagClient from './bugsnag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  doARenderError = false;
  doAHandledError = false;

  triggerRenderError() {
    this.doARenderError = true;
    setTimeout(function () {
      this.doARenderError = false;
    }.bind(this), 1000);
  }
  triggerHandledError() {
    this.doAHandledError = true;
  //  BugsnagErrorHandler.notify(new Error('Something broke!'));
    setTimeout(function () {
    this.doAHandledError = false;
    }.bind(this), 1000);
  }
}
