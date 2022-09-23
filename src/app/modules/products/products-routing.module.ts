import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ProductListComponent
    },
    {
        path: 'add',
        component: ProductAddComponent
    },
    {
        path: ':code/edit',
        component: ProductEditComponent
    },
    {
        path: ':code/detail',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}