import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'food-list',
  template: `
  <h3 *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)">
    {{ food.name }} <br> {{ food.calorie }} <br> {{ food.detail }}
  </h3>
  `
})

export class FoodListComponent {

}
