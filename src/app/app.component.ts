import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="number" placeholder="Weight" [(ngModel)]="weight" />
    <input type="number" placeholder="Height" [(ngModel)]="height" />

    <div>
      Your BMI is: <span *ngIf="isBMIDisplayed"> {{ BMI }} </span>
    </div>
  `,
  styles: [
    `
      input {
        display: block;
        margin-bottom: 24px;
      }
    `
  ]
})
export class AppComponent {
  weight = 0;
  height = 0;

  get BMI(): number {
    return this.weight / Math.pow(this.height, 2);
  }

  get isBMIDisplayed() {
    return this.heightAboveZero && this.weightAboveZero;
  }

  private get heightAboveZero() {
    return this.height > 0;
  }
  private get weightAboveZero() {
    return this.weight > 0;
  }
}
