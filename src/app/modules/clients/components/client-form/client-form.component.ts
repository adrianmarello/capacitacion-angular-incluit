import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientEntity } from 'src/app/core/entities/client.entity';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'cap-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

    public clientForm!: FormGroup;
    @Input() clientDNI!: number;
    client!: ClientEntity | undefined;
    clients: Array<ClientEntity> = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private clientService: ClientService
    ) {
        this.clients = this.clientService.clients
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
        this.clientService.addClient(this.clientForm.value)
    }

    editClient() {
       this.clientService.editClient(this.clientDNI, this.clientForm.value)
    }

}
