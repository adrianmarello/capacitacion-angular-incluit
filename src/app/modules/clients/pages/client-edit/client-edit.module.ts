import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit.component';
import { ClientEditRoutingModule } from './client-edit-routing.module';

@NgModule({
    declarations: [
        ClientEditComponent
    ],
    imports: [
        CommonModule,
        ClientEditRoutingModule
    ]
})
export class ClientEditModule { }
