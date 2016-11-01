import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.pug',
})
export class AppComp {

  now = __ENV__.now;

  version = __ENV__.version;
}
