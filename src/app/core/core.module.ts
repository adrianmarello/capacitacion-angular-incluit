import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LayoutContainerModule } from './layout/components/layout-container/layout-container.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutContainerModule,
        HttpClientModule
    ],
    exports: [
        
    ],
    providers: [
        LocalStorageService
    ]
})
export class CoreModule { }
