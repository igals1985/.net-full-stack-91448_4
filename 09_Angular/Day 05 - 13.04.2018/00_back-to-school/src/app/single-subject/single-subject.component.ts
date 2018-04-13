import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubjectInfo } from '../shared/models/subject.model';

@Component({
    selector: 'app-single-subject',
    templateUrl: './single-subject.component.html',
    styleUrls: ['./single-subject.component.css']
})
export class SingleSubjectComponent {

    //הגדרה שהמשתנה הזה מקבל את התוכן מקומפפנטת האב
    @Input() subject: SubjectInfo;


    // הגדרה של דרך ליצור אירוע בבן - בקומפוננטה הנוכחית 
    //ולהעביר את האירוע לקומפוננטת האב
    //באירוע עצמו ניתן להעביר פרמטר מהבן לאב
    //<string> את סוג הפרמטר שנעביר אנו מגדירם ב
    @Output() imgEmitter: EventEmitter<string>=new EventEmitter<string>();
    @Output() imgEmitterVoid: EventEmitter<void>=new EventEmitter<void>();

    public onImgSelected(): void {

        //emit הפונקציה 
        //היא פונקציה שמעוררת את האירוע בבן, ומאפשרת לאב להאזין לאירוע
        //כיוון שהגדרנו את הטיפוס - כמעביר מחרוזת כפרמטר באירוע
        //ניתן לפונקציה את המחרוזת שאנו רוצים להעביר לאב
        //$event הפרמטר ששלחנו יוכל להיות נגיש באב באמצעות המילה השמורה 
        this.imgEmitter.emit(this.subject.subjectLogo);

        this.imgEmitterVoid.emit();
    }
}


