import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerModule } from './layout/components/layout-container/layout-container.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        LayoutContainerModule
    ],
    exports: [
        LayoutContainerModule
    ]
})
export class SharedModule { }
