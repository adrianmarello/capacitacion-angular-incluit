import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerModule } from './layout/components/layout-container/layout-container.module';
import { ConfigurationService } from './services/configuration.service';

export function configurationServiceFactory(configurationService: ConfigurationService) {
    return () => configurationService.load();
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutContainerModule
    ],
    providers: [
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