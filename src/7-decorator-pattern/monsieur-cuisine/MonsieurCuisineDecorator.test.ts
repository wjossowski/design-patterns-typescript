import { RiceMeal } from './RiceMeal'
import { ShrimpMealDecorator } from './ShrimpMealDecorator'
import { PotatoMeal } from './PotatoMeal'
import { ChickenMealDecorator } from './ChickenMealDecorator'
import { SauceMealDecorator } from './SauceMealDecorator'

describe('MonsieurCuisine Decorator', () => {
  it('Creates RiceMeal', () => {
    const meal = new RiceMeal()
    meal.prepareMeal()
    expect(meal.getSteps()).toEqual(['Przygotowuje danie na bazie ryzu'])
  })

  it('Creates Rice meal with shrimp', () => {
    const meal = new ShrimpMealDecorator(new RiceMeal())
    meal.prepareMeal()
    expect(meal.getSteps()).toEqual([
      'Przygotowuje danie na bazie ryzu',
      'Do dania dodaje krewetki',
    ])
  })

  it('Creates Potato meal with chicken and sauce', () => {
    const meal = new SauceMealDecorator(
      new ChickenMealDecorator(new PotatoMeal()),
    )
    meal.prepareMeal()

    expect(meal.getSteps()).toEqual([
      'Przygotowuje danie na bazie ziemniakow',
      'Do dania dodaje kurczaka',
      'Do dania dodaje sosu',
    ])
  })
})
