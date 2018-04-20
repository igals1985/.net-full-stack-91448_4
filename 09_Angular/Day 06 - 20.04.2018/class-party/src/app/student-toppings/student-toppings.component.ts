import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../shared/services/studentService.services';

@Component({
  selector: 'app-student-toppings',
  templateUrl: './student-toppings.component.html',
  styleUrls: ['./student-toppings.component.css']
})
export class StudentToppingsComponent implements OnInit {
    students:Student[];
 
  //DI - יצירת משתנה מקומי ברמת המחלקה ישירות בתוך הפרמטרים של הבנאי
  //מאחורי הקלעים אנגולר מזריקה לתוך המשתנה את המופע היחיד שיצרה עבור השירות
  //(the singleton that was created in the provider)
  constructor(private myService:StudentService) { }
  
    ngOnInit() {
        this.students=this.myService.studentFullList;
    }

}
