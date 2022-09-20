import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        children: [{
            path: '',
            loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
        }]
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'register',
        children: [{
            path: '',
            loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule)
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
