import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserInfoService } from './shared/services/userInfoService.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
