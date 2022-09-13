import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutContainerModule } from './shared/layout/components/layout-container/layout-container.module';
import { ProductListComponent } from './modules/products/pages/product-list/product-list.component';
import { ProductEditComponent } from './modules/products/pages/product-edit/product-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductEditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        LayoutContainerModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
