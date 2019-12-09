import { MealDecorator } from './MealDecorator'
import { Meal } from './Meal'

export class ShrimpMealDecorator extends MealDecorator {
  constructor(decoratedMeal: Meal) {
    super(decoratedMeal)
  }

  private addShrimp() {
    this.steps.push('Do dania dodaje krewetki')
  }

  prepareMeal() {
    this.meal.prepareMeal()
    this.addShrimp()
  }
}
