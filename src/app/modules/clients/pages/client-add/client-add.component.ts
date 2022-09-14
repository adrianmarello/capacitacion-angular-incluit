import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-client-add',
    templateUrl: './client-add.component.html',
    styleUrls: ['./client-add.component.scss'],
})
export class ClientAddComponent implements OnInit {

    public clientForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService, private router: Router) {
        this.clientForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(20)]],
            lastName: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
            documentNumber: [null, [Validators.required, Validators.max(99999999)]],
            birthday: [null, Validators.required],
        })
    }

    ngOnInit(): void {}

    onSubmit(form: FormGroup) {
        this.clientForm.markAllAsTouched();
        if(this.clientForm.valid) {
            let newClientsArray: Array<ClientEntity> = [];
            if(this.localStorageService.get('clients')) {
                newClientsArray = this.localStorageService.get('clients')     
            } 
            newClientsArray.push(this.clientForm.value)
            this.localStorageService.set('clients', newClientsArray);
            alert('cliente agregado con éxito');
            this.router.navigate(['/client/list'])
            this.clientForm.reset();
        }
    }
}
