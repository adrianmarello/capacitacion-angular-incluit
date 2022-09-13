import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './shared/layout/components/layout-container/layout-container.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'product/list',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./modules/home/pages/home-page/home-page.module').then(m => m.HomePageModule)
            },
            {
                path: 'client',
                children: [{
                    path: '',
                    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
                }]
            },
            {
                path: 'product',
                children: [{
                    path: '',
                    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
                }]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'product/list'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
