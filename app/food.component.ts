import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.name }} <br> {{ food.calorie }} <br> {{ food.detail }}</h3>
  `
})

export class FoodComponent {
  public food: Food;
}
