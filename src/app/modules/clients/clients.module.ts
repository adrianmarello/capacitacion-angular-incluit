import { ClientTableComponent } from './components/client-table/client-table.component';
import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientService } from './services/client.service';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientFormModule } from './components/client-form/client-form.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ClientListComponent,
        ClientAddComponent,
        ClientEditComponent,
        ClientDetailComponent,
        ClientTableComponent
    ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        ClientFormModule,
        TranslateModule,
        RouterModule
    ],
    providers: [
        ClientService,
        TitleCasePipe
    ]
})
export class ClientsModule {}
