import { Component } from '@angular/core';
import { SubjectInfo } from './shared/models/subject.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    subjectArray: SubjectInfo[];
    selectedImg: string = "./assets/no_image_selected.gif";
    state: string = "";
    msg = {
        title: 'Welcome Back to school',
        date: new Date().toLocaleString()
    };



    public onChildImgSelected(logo: string): void {
        this.selectedImg = logo;
    }


    public onChildImgVoid(param: any): void {
        console.log("onChildImgVoid got as param: " + param);
    }


    public addSubject(sub: SubjectInfo) {
        this.subjectArray.push(sub);

    }


    public changeView(str: string) {
        this.state = str;
    }

    constructor() {
        this.subjectArray = [
            {
                subjectName: "Citizenship",
                subjectDesc: `Citizenship is a legal relationship between a person and a country. Usually the country is the one he or she was born in, lives in, supports, and in return gets protection. A person is usually a citizen of the country where he or she is born, but sometimes a person will apply to change his or her citizenship to become a citizen in another country. There are countries which allow dual (two) citizenship, and countries which do not.`,
                subjectLogo: "./assets/citizenship.png",
                subjectLink: "https://simple.wikipedia.org/wiki/Citizenship"
            },
            {
                subjectName: "Geography",
                subjectDesc: `Geography is the study of the Earth and its features, its inhabitants, and its phenomena.[1] The word geography comes from the Greek words gê ("Earth") and graphein ("to write, draw"). It means "to write and draw about the Earth". The word was first used by a scientist called Eratosthenes`,
                subjectLogo: "./assets/geography.jpg",
                subjectLink: "https://simple.wikipedia.org/wiki/Geography"
            }
        ];


    }
}
