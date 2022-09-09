import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        children: [{
            path: '',
            loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
        }]
    },
    {
        path: 'add',
        children: [{
            path: '',
            loadChildren: () => import('./pages/product-add/product-add.module').then(m => m.ProductAddModule)
        }]
    },
    {
        path: ':id/edit',
        children: [{
            path: '',
            loadChildren: () => import('./pages/product-edit/product-edit.module').then(m => m.ProductEditModule)
        }]
    },
    {
        path: ':id/detail',
        children: [{
            path: '',
            loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}