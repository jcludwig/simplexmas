import { Component } from '@angular/core';
import { Nickname } from './models/nickname';
import { NicknameSelection } from './nicknameSelection.component';

@Component({
  selector: 'my-app',
  // template: 'app.html'
  templateUrl: 'app/app.html'
})

export class AppComponent {
    public selectedNickname: Nickname;
}