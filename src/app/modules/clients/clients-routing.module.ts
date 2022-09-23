import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { ClientListComponent } from './pages/client-list/client-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ClientListComponent
    },
    {
        path: 'add',
        component: ClientAddComponent
    },
    {
        path: ':dni/edit',
        component: ClientEditComponent
    },
    {
        path: ':dni/detail',
        component: ClientDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule {}