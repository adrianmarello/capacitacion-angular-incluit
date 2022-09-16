import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductTableModule } from './../../components/product-table/product-table.module';

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        ProductTableModule
    ]
})
export class ProductListModule { }
