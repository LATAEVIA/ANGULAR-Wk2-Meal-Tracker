import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <h3 *ngFor="#food of foods">{{ food.name }} <br> {{ food.calorie }} <br> {{ food.detail }}</h3>
  </div>
  `
})

export class AppComponent {
  public food: Food;
  constructor(){
    this.food = new Food ("Mac and Cheese", 450, "I topped it with chopped bacon and chives", 0)
  }
}
