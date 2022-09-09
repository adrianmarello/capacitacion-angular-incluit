import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const MATERIAL_MODULES = [
    MatButtonModule
]

@NgModule({
    declarations: [
    LoginComponent,
    LoginFormComponent
  ],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        LoginComponent,
        ...MATERIAL_MODULES
    ]
})
export class SharedModule { }
