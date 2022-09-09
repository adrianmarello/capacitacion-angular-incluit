import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout-container.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        LayoutContainerComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FooterModule,
        HeaderModule,
        BodyModule
    ]
})
export class LayoutContainerModule { }
