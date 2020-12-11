import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chip-control',
    templateUrl: './chip-control.component.html',
    styleUrls: ['./chip-control.component.css']
})
export class ChipControlComponent implements OnInit {
    items: string[] = [];


    constructor() {
    }

    ngOnInit(): void {
    }

}
