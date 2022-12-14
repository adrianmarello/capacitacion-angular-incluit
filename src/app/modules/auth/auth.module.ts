import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
    declarations: [
    LogoutComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
