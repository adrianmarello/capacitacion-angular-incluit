import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
    selector: 'cap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private loginService: LoginService) { }

    title = 'capacitacion';

    ngOnInit(): void {
        this.loginService.eventAnnouncedLogin.subscribe(response => {
            alert(response)
        })
    }
}
