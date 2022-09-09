import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { ClientListRoutingModule } from './client-list-routing.module';

@NgModule({
    declarations: [
        ClientListComponent
    ],
    imports: [
        CommonModule,
        ClientListRoutingModule
    ]
})
export class ClientListModule { }
