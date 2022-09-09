import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { ProductAddRoutingModule } from './product-add-routing.module';

@NgModule({
    declarations: [
        ProductAddComponent
    ],
    imports: [
        CommonModule,
        ProductAddRoutingModule
    ]
})
export class ProductAddModule { }
