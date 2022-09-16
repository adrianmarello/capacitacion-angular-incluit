import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    exports: [
    ]
})
export class ProductsModule { }
