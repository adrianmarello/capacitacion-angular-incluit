import { Component, OnInit } from '@angular/core';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-client-table',
    templateUrl: './client-table.component.html',
    styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

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

    removeClient(dni: number): void {
        let clients = this.localStorageService.get('clients');
        this.localStorageService.set('clients', clients.filter((c: ClientEntity) => c.documentNumber != dni))
        this.getClients();
    }

}
