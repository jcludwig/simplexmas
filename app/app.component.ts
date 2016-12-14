import { Component } from '@angular/core';
import { Nickname } from './models/nickname';

@Component({
  selector: 'my-app',
  // template: 'app.html'
  templateUrl: 'app/app.html'
})

export class AppComponent {
    public nicknames: Nickname[];

    constructor() {
      this.nicknames = [
        { name: 'Jon' },
        { name: 'Heidi' },
        { name: 'Ruth' },
        { name: 'Damian' },
        { name: 'Gerald' },
      ];
    }
}