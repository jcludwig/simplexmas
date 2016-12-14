import { Component } from '@angular/core';
import { Nickname } from './models/nickname';

@Component({
  selector: 'nickname-selection',
  templateUrl: 'app/nicknameSelection.html'
})

export class NicknameSelection {
    public nicknames: Nickname[];
    public selectedNickname: Nickname;

    constructor() {
      this.nicknames = [
        { name: 'Jon' },
        { name: 'Heidi' },
        { name: 'Ruth' },
        { name: 'Damian' },
        { name: 'Gerald' },
      ];
    }

    public onNicknameSelected(nickname: Nickname): void {
      this.selectedNickname = nickname;
    }

    public onNicknameConfirmed(): void {
      window.location.assign('/wishes');
    }
}