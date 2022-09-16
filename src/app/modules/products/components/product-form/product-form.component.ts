import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

    public productForm!: FormGroup;
    @Input() productCode!: number;
    product!: ProductEntity;
    products: Array<ProductEntity> = this.localStorageService.get('products') || [];

    constructor(private formBuilder: FormBuilder,  private localStorageService: LocalStorageService, private router: Router) {
        this.productForm = this.formBuilder.group({
            code: [0, [Validators.required, Validators.min(1)]],
            name: ['', [Validators.required, Validators.maxLength(40)]],
            description: ['', [Validators.required]],
            price: [0, [Validators.required, Validators.min(1)]]
        })
    }

    ngOnInit(): void {
        if(this.productCode) {
            let products = this.localStorageService.get('products')
            this.product = products.find((p: ProductEntity) => p.code == this.productCode)
            this.productForm.setValue(this.product)
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
        this.products.push(this.productForm.value);
        this.localStorageService.set('products', this.products);
        //alert('Producto agregado con éxito');
    }

    editProduct() {
       let productIndex = this.products.findIndex((p: ProductEntity) => p.code == this.productCode)
       this.products[productIndex] = this.productForm.value;
       this.localStorageService.set('products', this.products);
       //alert('Producto modificado con éxito');
    }

}
