import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <h3 *ngFor="#food of foods" (click)="foodWasSelected(food)">
      {{ food.name }} <br> {{ food.calorie }} <br> {{ food.detail }}
    </h3>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Mac and Cheese", 450, "I topped it with chopped bacon and chives", 0),
      new Food("Tacos", 320, "I ate 5 tacos", 1),
      new Food("Ice cream cone", 200, "The waffle cone came with sprinkles", 2),
      new Food("Kale Salad", 175, "Ordered extra raisins", 3)
    ];
  }
}
