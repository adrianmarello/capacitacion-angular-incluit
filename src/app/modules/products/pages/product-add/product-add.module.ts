import { ProductFormComponent } from './../../components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { ProductAddRoutingModule } from './product-add-routing.module';
import { ProductFormModule } from '../../components/product-form/product-form.module';

@NgModule({
    declarations: [
        ProductAddComponent,
    ],
    imports: [
        CommonModule,
        ProductAddRoutingModule,
        ProductFormModule
    ]
})
export class ProductAddModule { }
