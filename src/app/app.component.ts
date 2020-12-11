import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="content">
      <mat-card>
        <app-chip-control></app-chip-control>
      </mat-card>
    </div>

  `,
  styles: []
})
export class AppComponent {
  title = 'chip-control';
}
