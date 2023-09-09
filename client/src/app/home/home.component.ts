import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { Club } from '@app/_models/club';
import { AccountService } from '@app/_services';
import { ClubService } from '@app/_services/club.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: User;
    clubs: Club[] = [];


    constructor(
        private accountService: AccountService,
        private clubService: ClubService
    ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit(): void {
        this.clubService.getAll().subscribe((data) => {
            this.clubs = data;
        });
    }

    logout() {
        this.accountService.logout();
    }
}
