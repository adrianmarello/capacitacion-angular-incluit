import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'cap-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

    public clientDNI!: number;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (Number(params['dni'])) {
                this.clientDNI = Number(params['dni'])
            } else {
                alert('No es un dni válido')
                this.router.navigate(['client/list'])
            }
        })
    }

}
