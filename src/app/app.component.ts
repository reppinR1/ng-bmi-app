import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>Calculate Your BMI</div>
      <span class="input-description"> Please provide your weight (kg): </span>
      <input type="number" placeholder="Weight" [(ngModel)]="weight" />
      <span class="input-description"> Please provide your height (m): </span>
      <input type="number" placeholder="Height" [(ngModel)]="height" />

      <div>
        Your BMI is:
        <span *ngIf="isBMIDisplayed" class="BMI"> {{ BMI.toFixed(2) }} </span>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: Helvetica;
        font-size: 32px;
      }
      input {
        display: block;
        margin-bottom: 24px;
        font-size: 24px;
        width: 4em;
      }

      div {
        margin-bottom: 32px;
      }

      .input-description {
        font-size: 24px;
        color: #2f4f4f;
      }
      .BMI {
        color: #369;
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
