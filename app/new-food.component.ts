import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="col-sm-8">
    <h3>Log Food:</h3>
    <input placeholder="Name of Food" class="input-lg form-control food-form" #newName>
    <input type=number placeholder="Number of Calories" class="input-lg form-control food-form" #newCalorie>
    <input placeholder="Additional Details" class="input-lg form-control food-form" #newDetail>
    <button (click)="addFood(newName, newCalorie, newDetail)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newCalorie: HTMLInputElement, newDetail: HTMLInputElement){
    var newFood = new Food (newName.value, parseInt(newCalorie.value), newDetail.value, null);
    this.onSubmitNewFood.emit(newFood);
    // console.log("new-food.component",  newFood);
    newName.value = "";
    newCalorie.value = "";
    newDetail.value = "";
  }
}
