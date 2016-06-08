export class Food {
  public healthy: boolean;
  markHealthy(){
    if (this.calorie >= 500){
      this.healthy = false;
    } else {
      this.healthy = true;
    }
  }
  //This took me forever!!!
  constructor(public name: string, public calorie: number, public detail: string, public id: number) {
    this.markHealthy();
  }
}
