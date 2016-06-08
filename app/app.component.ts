import { Component, EventEmitter  } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <food-list
    [foodList]="foods"
    (onFoodSelect)="foodWasSelected($event)">
    </food-list>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Mac and Cheese", 600, "I topped it with chopped bacon and chives", 0),
      new Food("Tacos", 500, "I ate 5 tacos", 1),
      new Food("Ice cream cone", 200, "The waffle cone came with sprinkles", 2),
      new Food("Kale Salad", 175, "Ordered extra raisins", 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log("app.component.ts", clickedFood);
  }
}
