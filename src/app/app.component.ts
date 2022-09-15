import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './core/services/login-service.service';

@Component({
    selector: 'cap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private loginService: LoginServiceService) { }

    title = 'capacitacion';

    ngOnInit(): void {
        this.loginService.eventAnnouncedLogin.subscribe(response => {
            alert(response)
        })
    }
}
