import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import defaultLanguage from "src/assets/i18n/es.json";

@Component({
    selector: 'cap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private translate: TranslateService) {
        this.translate.setTranslation('es', defaultLanguage);
        this.translate.setDefaultLang('es');
    }

    ngOnInit(): void {}
}
