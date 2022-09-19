import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddRoutingModule } from './client-add-routing.module';
import { ClientAddComponent } from './client-add.component';
import { ClientFormModule } from '../../components/client-form/client-form.module';

@NgModule({
    declarations: [
        ClientAddComponent,
    ],
    imports: [
        CommonModule,
        ClientAddRoutingModule,
        ClientFormModule
    ]
})
export class ClientAddModule { }
