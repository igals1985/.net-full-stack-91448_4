import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/userService.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    public userNameCopyHeader: any;

    constructor(private myUserService: UserService) { }

    ngOnInit() {
        this.userNameCopyHeader = this.myUserService.userName;
    }

}
