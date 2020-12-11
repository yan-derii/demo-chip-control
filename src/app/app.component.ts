import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

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
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div class="content">
            <mat-card>
                <h3>Template form</h3>
                <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
                    <app-chip-control ngModel name="chips"></app-chip-control>
                    <button mat-button type="submit">Submit</button>
                </form>
                <pre>Form value: {{ formValue | json }}</pre>
            </mat-card>
            <mat-card>
                <h3>Reactive form</h3>
                <form>
                    <app-chip-control [formControl]="reactiveControl"></app-chip-control>
                </form>
                <pre>Form value: {{ reactiveControl.value | json }}</pre>
            </mat-card>
        </div>

    `,
    styles: []
})
export class AppComponent {
    formValue = null;
    reactiveControl: FormControl = new FormControl(['subaru brz', 'honda nsx']);

    onSubmit(value) {
        this.formValue = value;
    }
}
