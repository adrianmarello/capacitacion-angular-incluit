import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'cap-client-table',
    templateUrl: './client-table.component.html',
    styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit, OnDestroy {

    clients: Array<ClientEntity> = [];
    clientsChangeSubscription: Subscription;

    constructor(private clientService: ClientService) {
        this.clientsChangeSubscription = this.clientService.clientsChange.subscribe(() => this.clients = this.clientService.clients)
    }

    ngOnInit(): void {
        this.clientService.getClients()
    }

    ngOnDestroy(): void {
        this.clientsChangeSubscription.unsubscribe();
    }

    removeClient(client: ClientEntity): void {
        this.clientService.removeClient(client)
    }

}
