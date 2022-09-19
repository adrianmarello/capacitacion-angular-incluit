import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';

@NgModule({
    declarations: [
        RegisterFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RegisterFormComponent
    ]
})
export class RegisterFormModule { }
