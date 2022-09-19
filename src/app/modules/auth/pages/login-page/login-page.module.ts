import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-page.component';
import { LoginRoutingModule } from './login-page-routing.module';
import { LoginFormModule } from '../../components/login-form/login-form.module';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        LoginFormModule
    ]
})
export class LoginPageModule { }
