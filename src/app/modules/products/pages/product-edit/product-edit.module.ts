import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductFormModule } from '../../components/product-form/product-form.module';

@NgModule({
    declarations: [
        ProductEditComponent
    ],
    imports: [
        CommonModule,
        ProductEditRoutingModule,
        ProductFormModule
    ]
})
export class ProductEditModule { }
