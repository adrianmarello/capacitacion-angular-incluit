import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'cap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('es');
        this.translate.use('es');
    }

    ngOnInit(): void {}
}
