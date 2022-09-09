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
            loadChildren: () => import('./pages/client-list/client-list.module').then(m => m.ClientListModule)
        }]
    },
    {
        path: 'add',
        children: [{
            path: '',
            loadChildren: () => import('./pages/client-add/client-add.module').then(m => m.ClientAddModule)
        }]
    },
    {
        path: ':id/edit',
        children: [{
            path: '',
            loadChildren: () => import('./pages/client-edit/client-edit.module').then(m => m.ClientEditModule)
        }]
    },
    {
        path: ':id/detail',
        children: [{
            path: '',
            loadChildren: () => import('./pages/client-detail/client-detail.module').then(m => m.ClientDetailModule)
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule {}