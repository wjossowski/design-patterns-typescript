import { Meal } from './Meal'

export class RiceMeal extends Meal {
  public prepareMeal() {
    this.steps.push('Przygotowuje danie na bazie ryzu')
  }
}
