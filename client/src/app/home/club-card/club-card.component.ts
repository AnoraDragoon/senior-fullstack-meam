import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Club, ClubUser } from '@app/_models/club';
import { AccountService } from '@app/_services';

@Component({
    selector: 'app-club-card',
    templateUrl: './club-card.component.html',
    styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent {

    @Input() club: Club;
    @Input() relation: ClubUser | null = null;

    @Output() relationOut: EventEmitter<ClubUser> = new EventEmitter();


    constructor(private accountService: AccountService) { }


    toggleRelation(): void {
        if (this.relation) {
            this.relation.activated = !this.relation.activated;
        } else {
            this.relation = {
                username: this.accountService.userValue.username,
                club: this.club.name,
                activated: true
            };
        }
        this.relationOut.emit(this.relation);
    }

}
