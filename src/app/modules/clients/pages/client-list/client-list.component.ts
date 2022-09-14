import { Component, OnInit } from '@angular/core';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

    public clients: Array<ClientEntity> = [];

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.getClients();
    }

    getClients(): void {
        if(this.localStorageService.get('clients')) {
            this.clients = this.localStorageService.get('clients');
        }  
    }
}
