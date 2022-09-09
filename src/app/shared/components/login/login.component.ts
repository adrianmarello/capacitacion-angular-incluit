import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cap-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string = 'Adrián Marello'

    constructor() { }

    ngOnInit(): void {}

    usernameReceived(event: string): void {
        console.log(event)
    }

}
