import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StudentNameComponent } from './student-name/student-name.component';
import { StudentToppingsComponent } from './student-toppings/student-toppings.component';
import { StudentService } from './shared/services/studentService.services';


@NgModule({
  declarations: [
    AppComponent,
    SingleStudentComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    StudentNameComponent,
    StudentToppingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
