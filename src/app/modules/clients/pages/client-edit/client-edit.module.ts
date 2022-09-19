import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit.component';
import { ClientEditRoutingModule } from './client-edit-routing.module';
import { ClientFormModule } from '../../components/client-form/client-form.module';

@NgModule({
    declarations: [
        ClientEditComponent,
    ],
    imports: [
        CommonModule,
        ClientEditRoutingModule,
        ClientFormModule
    ]
})
export class ClientEditModule { }
