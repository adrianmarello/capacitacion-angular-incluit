import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'cap-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

    public products: Array<ProductEntity> = [];
    productsChangeSubscription: Subscription;

    constructor(private productService: ProductService) {
        this.productsChangeSubscription = this.productService.productChange.subscribe(() => this.products = this.productService.products)
    }

    ngOnInit(): void {
        this.productService.getProducts();
    }

    ngOnDestroy(): void {
        this.productsChangeSubscription.unsubscribe();
    }

    removeProduct(product: ProductEntity): void {
        this.productService.removeProduct(product)
    }

}
