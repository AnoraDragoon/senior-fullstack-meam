import { Component, Input, OnInit } from '@angular/core';
import { Club } from '@app/_models/club';

@Component({
    selector: 'app-club-card',
    templateUrl: './club-card.component.html',
    styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent {

    @Input() club: Club;


    constructor() { }


}
