import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageComponentRoutingModule } from './home-page-routing.module';
import { CapitalizePipe } from 'src/app/core/pipes/capitalize.pipe';
import { UnlessDirective } from 'src/app/core/directives/unless.directive';

@NgModule({
    declarations: [
        HomePageComponent,
        CapitalizePipe,
        UnlessDirective
    ],
    imports: [
        CommonModule,
        HomePageComponentRoutingModule
    ]
})
export class HomePageModule { }
