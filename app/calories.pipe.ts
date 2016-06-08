import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: true
})


export class CaloriesPipe implements PipeTransform {
  transform (input: Food[], args){
    var desiredCalorieRange = args[0];
    if(desiredCalorieRange === "unhealthy") {
      return input.filter((food) => {
          return food.healthy;
      });
    } else if (desiredCalorieRange === "healthy") {
      return input.filter((food) => {
        return !food.healthy;
      });
    } else {
      return input;
    }
  }
}
