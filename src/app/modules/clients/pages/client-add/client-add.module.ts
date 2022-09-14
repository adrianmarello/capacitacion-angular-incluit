import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddRoutingModule } from './client-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientAddComponent } from './client-add.component';

@NgModule({
    declarations: [
        ClientAddComponent
    ],
    imports: [
        CommonModule,
        ClientAddRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ClientAddModule { }
