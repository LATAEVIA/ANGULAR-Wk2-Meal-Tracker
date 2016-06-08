import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="col-sm-8">
    <h3>Log Food:</h3>
    <input placeholder="Name of Food" class="input-lg form-control food-form">
    <input type=number placeholder="Number of Calories" class="input-lg form-control food-form">
    <input placeholder="Additional Details" class="input-lg form-control food-form">
    <button (click)="addFood()">Add</button>
  </div>
  `
})

//<input [(ngModel)]="food.calorie" class="input-lg form-control food-form"/>
// <div class="task-form">
//     <h3>Create Task:</h3>
//     <input placeholder="Description" class="col-sm-8 input-lg">
//     <button (click)="addTask()">Add</button>
//   </div>

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(){
    console.log("Loading all the noms...");
  }
}
