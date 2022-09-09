import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/components/layout-container/layout-container.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
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
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
