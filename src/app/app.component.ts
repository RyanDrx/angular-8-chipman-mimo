import { Component } from '@angular/core';

export interface Estimate {
  minPieces: number;
  maxPieces: number;
  workers: Worker[];
  overtimeTotal: number;
  regularTotal: number;
}

export interface Worker {
  position: string;
  quantity: number
  hours: number;
  regularCost: number;
  overtimeCost: number;
}

const ESTIMATES: Estimate[] = [
  {
    minPieces: 1, maxPieces: 15, workers: [
      { position: 'Supervisor', quantity: 1, hours: 5, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 1, hours: 5, regularCost: 450.00, overtimeCost: 500.00 },
      { position: 'Installer', quantity: 1, hours: 5, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 1, hours: 5, regularCost: 275.00, overtimeCost: 325.00 }
    ], overtimeTotal: 825, regularTotal: 725
  },
  {
    minPieces: 16, maxPieces: 30, workers: [
      { position: 'Supervisor', quantity: 1, hours: 5, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 1, hours: 5, regularCost: 450.00, overtimeCost: 500.00 },
      { position: 'Installer', quantity: 1, hours: 5, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 2, hours: 5, regularCost: 275.00, overtimeCost: 325.00 }
    ], overtimeTotal: 825, regularTotal: 725
  },
  {
    minPieces: 31, maxPieces: 60, workers: [
      { position: 'Supervisor', quantity: 1, hours: 6, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 1, hours: 6, regularCost: 540.00, overtimeCost: 660.00 },
      { position: 'Installer', quantity: 1, hours: 6, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 2, hours: 6, regularCost: 660.00, overtimeCost: 780.00 }
    ], overtimeTotal: 1440, regularTotal: 1200
  },
  {
    minPieces: 61, maxPieces: 90, workers: [
      { position: 'Supervisor', quantity: 1, hours: 7, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 1, hours: 7, regularCost: 630.00, overtimeCost: 770.00 },
      { position: 'Installer', quantity: 1, hours: 7, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 3, hours: 7, regularCost: 1155.00, overtimeCost: 1365.00 }
    ], overtimeTotal: 2135, regularTotal: 1785
  },
  {
    minPieces: 91, maxPieces: 120, workers: [
      { position: 'Supervisor', quantity: 1, hours: 8, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 2, hours: 8, regularCost: 1440.00, overtimeCost: 1600.00 },
      { position: 'Installer', quantity: 1, hours: 8, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 3, hours: 8, regularCost: 1320.00, overtimeCost: 1560.00 }
    ], overtimeTotal: 3160, regularTotal: 2760
  },
  {
    minPieces: 121, maxPieces: 150, workers: [
      { position: 'Supervisor', quantity: 1, hours: 9, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Driver', quantity: 2, hours: 9, regularCost: 1620.00, overtimeCost: 1980.00 },
      { position: 'Installer', quantity: 1, hours: 9, regularCost: 0.00, overtimeCost: 0.00 },
      { position: 'Helper', quantity: 4, hours: 9, regularCost: 1980.00, overtimeCost: 2340.00 }
    ], overtimeTotal: 4320, regularTotal: 3600
  },
]

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;
  estimate: Estimate = null;
  estimated = false;

  sliderChange(event) {
    const estimate = this.computeCost();
    console.log(estimate);
    this.estimate = estimate;
  }

  computeCost() {
    if (this.value < 1) {
      this.estimated = false;
      return null
    }

    this.estimated = true;
    return ESTIMATES.filter(
      (est: Estimate) =>
        est.maxPieces <= this.value && est.minPieces > this.value)[0]
  }

}
