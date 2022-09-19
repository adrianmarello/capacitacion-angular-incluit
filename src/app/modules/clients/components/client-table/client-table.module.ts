import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientTableComponent } from './client-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ClientTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ClientTableComponent
    ]
})
export class ClientTableModule { }
