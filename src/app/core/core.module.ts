import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LayoutContainerModule } from './layout/components/layout-container/layout-container.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutContainerModule
    ],
    exports: [
        
    ],
    providers: [
        LocalStorageService,
    ]
})
export class CoreModule { }
