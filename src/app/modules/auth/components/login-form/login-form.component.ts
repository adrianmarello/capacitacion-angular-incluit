
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
    selector: 'cap-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder, 
        private router: Router, 
        private loginService: LoginService,
        private localStorageService: LocalStorageService
    ) { 
        this.loginForm = this.formBuilder.group({
            email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    ngOnInit(): void { }

    onSubmit(form: FormGroup) {
        this.loginForm.markAllAsTouched();
        if(this.loginForm.valid) {
            this.login();
        }
    }

    login() {
        this.loginService.login(this.loginForm.value).subscribe( data => {
            this.loginForm.reset();
            this.localStorageService.set('access_token', data?.token)
            this.router.navigate(['/product/list']);

        });
    }

}
