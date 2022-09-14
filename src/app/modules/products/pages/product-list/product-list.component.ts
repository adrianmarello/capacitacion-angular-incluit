import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cap-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

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
}
