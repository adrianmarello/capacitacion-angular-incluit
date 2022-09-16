import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProductTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ProductTableComponent
    ]
})
export class ProductTableModule { }
