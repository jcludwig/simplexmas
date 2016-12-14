import { Component, Input } from '@angular/core';
import { Nickname } from './models/nickname';

@Component({
  selector: 'nickname-picker',
  templateUrl: 'app/nicknamePicker.html'
})

export class NicknamePicker {
    @Input()
    public nicknames: Nickname[];

    public selected: Nickname;

    public onSelect(nickname: Nickname): void {
        this.selected = nickname;
    }
}