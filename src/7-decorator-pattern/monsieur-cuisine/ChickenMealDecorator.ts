import { MealDecorator } from './MealDecorator'
import { Meal } from './Meal'

export class ChickenMealDecorator extends MealDecorator {
  constructor(decoratedMeal: Meal) {
    super(decoratedMeal)
  }

  private addChicken() {
    this.steps.push('Do dania dodaje kurczaka')
  }

  prepareMeal() {
    this.meal.prepareMeal()
    this.addChicken()
  }
}
