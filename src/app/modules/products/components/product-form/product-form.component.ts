import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'cap-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

    public productForm!: FormGroup;
    @Input() productCode!: number;
    product!: ProductEntity | undefined;
    products: Array<ProductEntity> = [];

    constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) {
        this.products = this.productService.products
        this.productForm = this.formBuilder.group({
            code: [0, [Validators.required, Validators.min(1)]],
            name: ['', [Validators.required, Validators.maxLength(40)]],
            description: ['', [Validators.required]],
            price: [0, [Validators.required, Validators.min(1)]]
        })
    }

    ngOnInit(): void {
        if(this.productCode) {
            this.product = this.products.find((p: ProductEntity) => p.code == this.productCode)
            this.productForm.setValue(this.product || {})
        }
    }

    onSubmit(form: FormGroup) {
        this.productForm.markAllAsTouched();
        if(this.productForm.valid) {
            if(this.productCode) {
                this.editProduct();
            } else {
                this.addProduct();
            }
            this.productForm.reset();
            this.router.navigate(['/product/list']);
        }
    }

    addProduct() {
        this.productService.addProduct(this.productForm.value)
    }

    editProduct() {
        this.productService.editProduct(this.productCode, this.productForm.value)
    }

}
