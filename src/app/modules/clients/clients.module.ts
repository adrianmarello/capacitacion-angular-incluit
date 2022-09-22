import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientService } from './services/client.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ClientsRoutingModule
    ],
    providers: [
        ClientService,
        TitleCasePipe
    ]
})
export class ClientsModule {}
