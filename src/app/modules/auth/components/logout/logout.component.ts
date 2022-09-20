import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router, private localStorageService: LocalStorageService) {
        this.localStorageService.remove('access_token');
        this.router.navigate(['/auth/login']);
    }

    ngOnInit(): void {}

}
