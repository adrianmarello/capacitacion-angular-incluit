import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientTableModule } from '../../components/client-table/client-table.module';

@NgModule({
    declarations: [
        ClientListComponent
    ],
    imports: [
        CommonModule,
        ClientListRoutingModule,
        ClientTableModule
    ]
})
export class ClientListModule { }
