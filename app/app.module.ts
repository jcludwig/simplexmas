import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NicknamePicker } from './nicknamePicker.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NicknamePicker ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }