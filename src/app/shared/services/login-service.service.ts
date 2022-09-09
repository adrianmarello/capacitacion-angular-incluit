import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {

    private eventEmittionSourceLogin = new Subject<string>;
    public eventAnnouncedLogin = this.eventEmittionSourceLogin.asObservable();

    constructor() { }

    sendLogin(username: string) {
        this.eventEmittionSourceLogin.next(username);
    }
}
