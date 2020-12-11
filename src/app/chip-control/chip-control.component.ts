import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
    selector: 'app-chip-control',
    templateUrl: './chip-control.component.html',
    styleUrls: ['./chip-control.component.css']
})
export class ChipControlComponent implements OnInit {
    items: string[] = ['bmw', 'auti'];
    itemInputControl = new FormControl();

    @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;


    constructor() {
    }

    ngOnInit(): void {
    }

    addChip(event: MatChipInputEvent) {
        const {input, value} = event;

        if ((value || '').trim()) {
            this.items.push(value.trim())
        }

        if (input) {
            input.value = '';
        }

        this.itemInputControl.setValue(null);
    }

    removeChip(item: string) {
        const index = this.items.indexOf(item);

        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }

}
