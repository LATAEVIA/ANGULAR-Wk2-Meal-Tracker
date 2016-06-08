import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-properties',
  inputs: ['food'],
  template: `
  `
})
export class EditFoodDPorpertiesComponent {
  public food: Food;
}
