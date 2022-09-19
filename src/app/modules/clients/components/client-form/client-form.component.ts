import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

    public clientForm!: FormGroup;
    @Input() clientDNI!: number;
    client!: ClientEntity | undefined;
    clients: Array<ClientEntity> = this.localStorageService.get('clients') || [];

    constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService, private router: Router) {
        this.clientForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(20)]],
            lastName: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
            documentNumber: [null, [Validators.required, Validators.max(99999999)]],
            birthday: [null, Validators.required],
        })
    }

    ngOnInit(): void {
        if(this.clientDNI) {
            this.client = this.clients.find((c: ClientEntity) => c.documentNumber == this.clientDNI)
            this.clientForm.setValue(this.client || {})
        }
    }

    onSubmit(form: FormGroup) {
        this.clientForm.markAllAsTouched();
        if(this.clientForm.valid) {
            if(this.clientDNI) {
                this.editClient();
            } else {
                this.addClient();
            }
            this.clientForm.reset();
            this.router.navigate(['/client/list'])
        }
    }

    addClient() {
        this.clients.push(this.clientForm.value);
        this.localStorageService.set('clients', this.clients);
        //alert('Cliente agregado con éxito');
    }

    editClient() {
       let clientIndex = this.clients.findIndex((c: ClientEntity) => c.documentNumber == this.clientDNI)
       this.clients[clientIndex] = this.clientForm.value;
       this.localStorageService.set('clients', this.clients);
       //alert('Cliente modificado con éxito');
    }

}
