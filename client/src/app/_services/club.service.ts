import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Club } from '@app/_models/club';

@Injectable({
    providedIn: 'root'
})
export class ClubService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Club[]>(`${environment.apiUrl}/clubs`);
    }

    save(club: Club) {
        console.log('ClubService.save');
        return this.http.post(`${environment.apiUrl}/clubs`, club);
    }
}
