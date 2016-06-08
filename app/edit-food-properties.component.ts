import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-properties',
  inputs: ['food'],
  template: `
    <h3>Edit Name: {{ food.name }}</h3>
    <h3>Edit Calorie Count: {{ food.calorie }}</h3>
    <h3>Edit Details: {{ food.detail }}</h3>
  `
})
export class EditFoodDPorpertiesComponent {
  public food: Food;
}
