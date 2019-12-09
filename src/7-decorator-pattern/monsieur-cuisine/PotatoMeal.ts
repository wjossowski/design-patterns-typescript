import { Meal } from './Meal'

export class PotatoMeal extends Meal {
  public prepareMeal() {
    this.steps.push('Przygotowuje danie na bazie ziemniakow')
  }
}
