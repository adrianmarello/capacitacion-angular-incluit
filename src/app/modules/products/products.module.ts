import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductFormModule } from './components/product-form/product-form.module';
import { RouterModule } from '@angular/router';
import { ProductTableComponent } from './components/product-table/product-table.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductAddComponent,
        ProductTableComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        TranslateModule,
        ProductFormModule,
        RouterModule
    ],
    providers: [
        ProductService,
        TitleCasePipe
    ]
})
export class ProductsModule { }
