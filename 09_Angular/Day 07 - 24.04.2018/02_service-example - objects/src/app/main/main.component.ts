import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/userService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
    public userNameCopyMain:any;
    
        constructor(private myUserService: UserService) { }
    
        ngOnInit() {
            this.userNameCopyMain = this.myUserService.userName;
        }
    

}
