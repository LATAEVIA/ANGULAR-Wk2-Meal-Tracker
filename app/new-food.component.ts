import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <h3>This template is blank for now</h3>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
}
