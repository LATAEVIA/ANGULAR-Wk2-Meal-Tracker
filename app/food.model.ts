export class Food {
  public healthy: boolean;
  constructor(public name: string, public calorie: number, public detail: string, public id: number) {}
  markHealthy(){
    if (this.calorie >= 500){
      this.healthy = false;
    } else {
      this.healthy = true;
    }
  }
}
