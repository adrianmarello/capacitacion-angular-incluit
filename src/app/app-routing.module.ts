import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LayoutContainerComponent } from './core/layout/components/layout-container/layout-container.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
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
                }],
                canActivate: [AuthGuard]
            },
            {
                path: 'product',
                children: [{
                    path: '',
                    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
                }],
                canActivate: [AuthGuard]
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
