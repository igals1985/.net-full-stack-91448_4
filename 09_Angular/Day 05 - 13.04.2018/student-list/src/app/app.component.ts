import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    studentArray: string[] = new Array<string>();
    newStudent: string;
    errorMsg:string;

    public addStudent() {
        if (this.newStudent.length > 3 && this.newStudent.length < 15) {

      /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. 
      * If fromIndex is omitted, the search starts at index 0.
      *If the element dont exist in the array we will get -1
      */
            if(this.studentArray.indexOf(this.newStudent)==-1){
                this.studentArray.push(this.newStudent);
                this.errorMsg=""; 
            }
            else{
                this.errorMsg="This name is allready taken";  
            }
           
        }
        else{
            this.errorMsg="Pleade enter a name with 3-15 chars";
        }
    }
}
