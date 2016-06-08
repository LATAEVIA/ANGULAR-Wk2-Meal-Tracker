import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodDPorpertiesComponent } from './edit-food-properties.component';
import {NewFoodComponent} from './new-food.component';



@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDPorpertiesComponent, NewFoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]= "currentFood">
  </food-display>
  <edit-food-properties *ngIf="selectedFood" [food]= "selectedFood">
  </edit-food-properties>
  <new-food (onSubmitNewFood)="assignId($event)">
  </new-food>
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

  assignId(food: Food): void {
    this.foodList.push(food);
    console.log(this.foodList);
  }
}

// assignId(food: Food): void {
//   food.id = this.foodList.length;
//   this.foodList.push(food);
//   console.log(this.foodList);
// }
