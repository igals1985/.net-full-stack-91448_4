import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserInfoService {

    constructor(private myHttpClient: HttpClient) {


        //subscribe הפונקציה
        //מתרחשת כאשר התשובה מהשרת אליו פנינו הגיעה בחזרה
        //subscribe בתור פרמטר הפונקציה 
        //callback תקבל 
        //ואליו היא תעביר את התשובה שחזרה מהשרת
        this.myHttpClient.get("https://reqres.in/api/users/4?delay=6").subscribe((x)=> {this.userInfo = x;});


    }

    public userInfo: any={};

}
