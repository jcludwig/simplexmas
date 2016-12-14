import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nickname } from './models/nickname';

@Component({
  selector: 'nickname-picker',
  templateUrl: 'app/nicknamePicker.html'
})

export class NicknamePicker {
    @Input()
    public nicknames: Nickname[];

    @Output()
    public onSelected = new EventEmitter<Nickname>();

    public selected: Nickname;

    public onSelect(nickname: Nickname): void {
        this.selected = nickname;
        this.onSelected.emit(nickname);
    }
}