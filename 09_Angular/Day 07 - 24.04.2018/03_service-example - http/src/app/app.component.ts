import { Component } from '@angular/core';
import { UserInfoService } from './shared/services/userInfoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public userMain:any;
        constructor(private myUserInfoService:UserInfoService) { }
    
        ngOnInit() {
            this.userMain = this.myUserInfoService;
        }
}
