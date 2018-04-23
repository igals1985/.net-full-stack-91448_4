import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    newStudent: string;
    currentStudent: string="Ori";

    public addStudent() {
        this.currentStudent = this.newStudent;

    }
}
