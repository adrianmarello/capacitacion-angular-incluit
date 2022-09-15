import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {

    public productForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,  private localStorageService: LocalStorageService, private router: Router) {
        this.productForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(40)]],
            description: ['', [Validators.required]],
            price: [0, [Validators.required, Validators.min(1)]]
        })
    }

    ngOnInit(): void {}

    onSubmit(form: FormGroup) {
        this.productForm.markAllAsTouched();
        if(this.productForm.valid) {
            let newProductsArray: Array<ProductEntity> = [];
            if(this.localStorageService.get('products')) {
                newProductsArray = this.localStorageService.get('products')     
            } 
            newProductsArray.push(this.productForm.value)
            this.localStorageService.set('products', newProductsArray);
            alert('producto agregado con éxito');
            this.router.navigate(['/product/list']);
            this.productForm.reset();
        }
    }
}
