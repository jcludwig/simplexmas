import { Injectable } from '@angular/core';

import { Nickname } from './models/nickname';

@Injectable()
export class NicknameService {
    public selectedNickname: Nickname;
}