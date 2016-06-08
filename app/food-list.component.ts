import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  template: `
  <h3 *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood">
    {{ currentFood.name }} <br> {{ currentFood.calorie }} <br> {{ currentFood.detail }}
  </h3>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("food-list", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
