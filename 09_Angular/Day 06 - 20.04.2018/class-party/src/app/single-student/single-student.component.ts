import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../shared/models/student.model';

@Component({
    selector: 'app-single-student',
    templateUrl: './single-student.component.html',
    styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {
    @Input() singleStudent: Student;
    constructor() { }

    ngOnInit() {
    }

}
