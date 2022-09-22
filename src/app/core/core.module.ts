import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LayoutContainerModule } from './layout/components/layout-container/layout-container.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './services/configuration.service';

export function configurationServiceFactory(configurationService: ConfigurationService) {
    return () => configurationService.load();
}

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
        LocalStorageService,
        {
            provide: APP_INITIALIZER,
            useFactory: configurationServiceFactory,
            deps: [
              ConfigurationService,
            ],
            multi: true,
        },
    ]
})
export class CoreModule { }
