import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  value = 0;
  cost = 0.00

  sliderChange(event) {
    this.cost = this.computeCost();
  }

  computeCost() {
    if (this.value >= 123) {
      return 3600;
    }
     if (this.value >= 93) {
      return 2760;
    }
     if (this.value >= 63) {
      return 1785;
    }
     if (this.value >= 33) {
      return 1200;
    }
     if (this.value >= 15) {
      return 725;
    }
      if (this.value >= 1) {
      return 725;
    }
  }

}
