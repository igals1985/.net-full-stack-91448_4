import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JbSeasonDirective } from './shared/jb-season.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, JbSeasonDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
