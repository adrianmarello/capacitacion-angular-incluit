import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientAddComponent } from './pages/client-add/client-add.component';

@NgModule({
    declarations: [
    ClientAddComponent
  ],
    imports: [
        CommonModule,
        ClientsRoutingModule
    ]
})
export class ClientsModule {}
