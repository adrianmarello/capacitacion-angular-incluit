import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    public access_token!: string;

    constructor(private localStorageService: LocalStorageService) { 
        this.access_token = this.localStorageService.get('access_token');
    }

    load() {
        console.log('Obtengo el access_token en el servicio de inicialización');
    }
}
