import { TitleCasePipe } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductEntity } from 'src/app/core/entities/product.entity';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private _products: ProductEntity[] = []
    public productChange: EventEmitter<any> = new EventEmitter()

    constructor(
        private localStorageService: LocalStorageService, 
        private toastr: ToastrService,
        private titlecasePipe: TitleCasePipe
    ) { 
        this.getProducts()
    }

    public get products() {
        return this._products
    }

    getProducts(): void {
        this._products = this.localStorageService.get('products') || [];
        this.productChange.emit(true)
    }

    removeProduct(values: ProductEntity): void {
        this.localStorageService.set('products', this._products.filter((p: ProductEntity) => p.code != values.code))
        this.toastr.error(`"${this.titlecasePipe.transform(values.name)}" eliminado con éxito!`)
        this.getProducts();
    }

    addProduct(values: ProductEntity) {
        this._products.push(values)
        this.localStorageService.set('products', this._products)
        this.toastr.success(`"${this.titlecasePipe.transform(values.name)}" agregado con éxito!`)
        this.getProducts()
    }

    editProduct(code: number, values: ProductEntity) {
        let clientIndex = this._products.findIndex((c: ProductEntity) => c.code == code)
        this._products[clientIndex] = values;
        this.localStorageService.set('products', this._products);
        this.toastr.success(`"${this.titlecasePipe.transform(values.name)}" modificado con éxito!`)
        this.getProducts()
    }

}
