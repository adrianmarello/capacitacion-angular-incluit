import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginServiceService } from 'src/app/core/services/login-service.service';


@Component({
    selector: 'cap-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    @Input('user') username: string = ''
    @Output() onClick= new EventEmitter<string>(); 

    constructor(private loginService: LoginServiceService) { }

    ngOnInit(): void {
        console.log(this.username)
    }

    buttonClicked(): void {
        this.loginService.sendLogin(this.username);
    }

}
