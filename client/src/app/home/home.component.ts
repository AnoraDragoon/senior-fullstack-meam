import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '@app/_models';
import { Club } from '@app/_models/club';
import { AccountService, AlertService } from '@app/_services';
import { ClubService } from '@app/_services/club.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: User;
    clubs: Club[] = [];
    form: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private clubService: ClubService,
        private alertService: AlertService

    ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            text: ['', Validators.required]
        });
        this.loadClubs();
    }

    logout() {
        this.accountService.logout();
    }

    loadClubs(): void {
        this.clubService.getAll().subscribe((data) => {
            this.clubs = data;
        });
    }

    onSubmit(): void {
        if (!this.form.valid) {
            this.alertService.warn('Form is invalid!!');
            return;
        }
        let name = this.form.get('name').value;
        let text = this.form.get('text').value;
        let club = this.createClub(name, text);

        this.clubService.save(club).subscribe(data => {
            console.log(data);
        });
    }

    createClub(name: string, text: string): Club {
        let club: Club = {
            name: name,
            text: text,
            image: `/assets/images/${this.getRandomImage()}`
        };

        return club;
    }

    private getRandomImage(): string {
        let value = Math.floor(Math.random() * 4); // value random between 0 and 3.
        let result: string = '';
        switch (value) {
            case 1:
                result = 'bucky.jpg';
                break;
            case 2:
                result = 'kirbys_adventure.jpg';
                break;
            case 3:
                result = 'megaman_6.jpg';
                break;
            default:
                result = 'ducktales.jpg'
                break;
        }
        return result;
    }
}
