import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'cap-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    public productCodeParam!: number;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if(Number(params['code'])) {
                this.productCodeParam = Number(params['code'])
            } else {
                alert('No es un código de producto válido')
                this.router.navigate(['product/list'])
            }
        })
    }

}
