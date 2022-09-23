import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ClientFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        ClientFormComponent
    ]
})
export class ClientFormModule { }
