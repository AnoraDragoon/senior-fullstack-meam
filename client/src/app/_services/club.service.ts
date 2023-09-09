import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Club, ClubUser } from '@app/_models/club';


@Injectable({
    providedIn: 'root'
})
export class ClubService {

    private relations: BehaviorSubject<ClubUser[]> = new BehaviorSubject([]);
    public relations$: Observable<ClubUser[]>;


    constructor(private http: HttpClient) {
        this.relations$ = this.relations.asObservable();
    }

    getAll() {
        return this.http.get<Club[]>(`${environment.apiUrl}/clubs`);
    }

    save(club: Club) {
        return this.http.post(`${environment.apiUrl}/clubs`, club);
    }

    setRelation(relation: ClubUser): void {
        let data: ClubUser[] = this.relations.getValue();
        let index: number = data.indexOf(relation);
        if (index > 0) {
            data.push(relation);
        } else {
            data[index] = relation;
        }
        this.relations.next(data);
    }

    getRelations(username: string) {
        const params = new HttpParams();
        params.set('username', username);
        return this.http.get<ClubUser[]>(`${environment.apiUrl}/clubs/relation`, { params });
    }

    saveRelation(clubUser: ClubUser) {
        return this.http.post(`${environment.apiUrl}/clubs/relation`, clubUser);
    }
}
