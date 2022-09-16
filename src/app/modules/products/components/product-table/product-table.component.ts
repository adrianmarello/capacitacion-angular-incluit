import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

    public products: Array<ProductEntity> = [];

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        if(this.localStorageService.get('products')) {
            this.products = this.localStorageService.get('products');
        }  
    }

    removeProduct(productCode: number): void {
        let products = this.localStorageService.get('products');
        this.localStorageService.set('products', products.filter((p: ProductEntity) => p.code != productCode))
        this.getProducts();
    }

}
