import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-properties',
  inputs: ['food'],
  template: `
  <div class="food-form col-sm-8">
    <h3>Edit Name:</h3>
    <input [(ngModel)]="food.name" class="input-lg form-control food-form"/>
    <h3>Edit Calorie Count:</h3>
    <input [(ngModel)]="food.calorie" class="input-lg form-control food-form"/>
    <h3>Edit Details:</h3>
    <input [(ngModel)]="food.detail" class="input-lg form-control food-form"/>
  </div>
  `
})

export class EditFoodDPorpertiesComponent {
  public food: Food;
}
