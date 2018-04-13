import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SingleSubjectComponent } from './single-subject/single-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleSubjectComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
