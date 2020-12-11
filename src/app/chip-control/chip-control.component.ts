import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs/operators";

// Just a list of suggestions
const SUGGESTIONS: string[] = [
    'honda civic',
    'honda accord',
    'toyota supra',
    'toyota camry',
    'subaru wrx',
    'subaru brz',
    'subaru forester',
    'bmw m5',
    'bmw x7',
    'bmw i8',
    'mercedes benz',
    'audi',
    'chevrolet',
    'ford',
    'lincoln',
    'cadillac',
];

@Component({
    selector: 'app-chip-control',
    templateUrl: './chip-control.component.html',
    styleUrls: ['./chip-control.component.css']
})
export class ChipControlComponent implements OnInit {
    items: string[] = [];
    itemInputControl = new FormControl();

    @ViewChild('itemInput')
    itemInput: ElementRef<HTMLInputElement>;

    @ViewChild('autocomplete')
    matAutocomplete: MatAutocomplete;

    suggestions: string[] = SUGGESTIONS;

    currentSuggestions: Observable<string[]>;

    constructor() {
        this.currentSuggestions = this.itemInputControl.valueChanges.pipe(
            startWith(null),
            debounceTime(300),
            distinctUntilChanged(),
            map((input: string | null) => input ? this.filterSuggestions(input) : [...this.suggestions])
        )
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

    selectAutocomplete(event: MatAutocompleteSelectedEvent) {
        this.items.push(event.option.viewValue);
        this.itemInput.nativeElement.value = '';
        this.itemInputControl.setValue(null);
    }

    filterSuggestions(input: string) {
        return this.suggestions.filter(
            suggestion => suggestion.toLowerCase().startsWith(input.trim().toLowerCase())
        );
    }

}
