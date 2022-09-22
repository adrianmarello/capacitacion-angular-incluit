import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userLogged: boolean = this.localStorageService.get('access_token') ? true : false;
    currentRoute: string = '';
    menuItems: Array<any> = [
        {name: 'Productos', class: 'nav-link', route: '/product/list'},
        {name: 'Clientes', class: 'nav-link', route: '/client/list'}
    ]

    constructor(private route: Router, private localStorageService: LocalStorageService) { 
        this.route.events.subscribe((event: Event) => {
    
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
            }
    
            if (event instanceof NavigationError) {
                console.log(event.error);
            }
        });
    }
    
    ngOnInit(): void {
        
    }

}
