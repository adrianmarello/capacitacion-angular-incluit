import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    public userIsLogged = this.localStorageService.get('access_token');

    constructor(private localStorageService: LocalStorageService) { }

    ngOnInit(): void {}

}
