import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/userService.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public userNameCopyFooter: string;
    
        constructor(private myUserService: UserService) { }
    
        ngOnInit() {
            this.userNameCopyFooter = this.myUserService.userName;
        }
}
