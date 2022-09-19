import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
import { RegisterFormModule } from '../../components/register-form/register-form.module';


@NgModule({
    declarations: [
        RegisterPageComponent
    ],
    imports: [
        CommonModule,
        RegisterPageRoutingModule,
        RegisterFormModule
    ]
})
export class RegisterPageModule { }
