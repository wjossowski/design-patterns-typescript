import { MealDecorator } from './MealDecorator'
import { Meal } from './Meal'

export class SauceMealDecorator extends MealDecorator {
  constructor(decoratedMeal: Meal) {
    super(decoratedMeal)
  }

  private addSauce() {
    this.steps.push('Do dania dodaje sosu')
  }

  prepareMeal() {
    this.meal.prepareMeal()
    this.addSauce()
  }
}
