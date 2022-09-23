import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutContainerComponent,
        FooterComponent,
        HeaderComponent,
        BodyComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        TranslateModule,
        RouterModule
    ],
})
export class LayoutContainerModule { }
