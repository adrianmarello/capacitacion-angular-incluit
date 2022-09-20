import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private eventEmittionSourceLogin = new Subject<string>;
    public eventAnnouncedLogin = this.eventEmittionSourceLogin.asObservable();

    constructor(private http: HttpClient) { }

    sendLogin(username: string) {
        this.eventEmittionSourceLogin.next(username);
    }

    login(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", user);
    }
}
