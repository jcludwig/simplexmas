import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NicknamePicker } from './nicknamePicker.component';
import { NicknameSelection } from './nicknameSelection.component';
import { NicknameService } from './nickname.service';
import { WishesComponent } from './wishes.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NicknameSelection
      }, {
        path: 'wishes',
        component: WishesComponent,
      }
    ])
  ],
  declarations: [AppComponent, NicknamePicker, NicknameSelection, WishesComponent],
  bootstrap: [AppComponent],
  providers: [NicknameService],
})
export class AppModule { }