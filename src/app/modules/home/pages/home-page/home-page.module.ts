import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageComponentRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomePageComponentRoutingModule
    ]
})
export class HomePageModule { }
