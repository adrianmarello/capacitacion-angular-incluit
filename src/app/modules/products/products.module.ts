import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    exports: [
    ],
    providers: [
        ProductService,
        TitleCasePipe
    ]
})
export class ProductsModule { }
