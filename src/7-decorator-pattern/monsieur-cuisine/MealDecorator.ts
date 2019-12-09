import { Meal } from './Meal'

export abstract class MealDecorator extends Meal {
  constructor(protected readonly meal: Meal) {
    super()
  }

  public prepareMeal() {
    this.meal.prepareMeal()
  }

  public getSteps(): string[] {
    return [...this.meal.getSteps(), ...this.steps]
  }
}
