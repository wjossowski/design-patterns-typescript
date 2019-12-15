import { CoffeeMachine } from './CoffeeMachine'
describe('CoffeeMachine State test', () => {
  it('Follows the happy path', () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.insertTheCoin()
    coffeeMachine.pushTheButton()
    coffeeMachine.takeTheCup()

    expect(coffeeMachine.actions).toEqual([
      'Setting new state: CoinInsertedState',
      'Setting new state: CoffeePouredState',
      'Setting new state: NoCoinState',
    ])
  })

  it('Informs about next steps when no coin', () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.pushTheButton()

    expect(coffeeMachine.actions).toEqual(['No coin inserted'])
  })

  it('Informs about next steps when trying to take', () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.takeTheCup()

    expect(coffeeMachine.actions).toEqual(['No coin inserted'])
  })

  it('Correctly returns coin', () => {
    const coffeeMachine = new CoffeeMachine()
    coffeeMachine.insertTheCoin()
    coffeeMachine.returnTheCoin()

    expect(coffeeMachine.actions).toEqual([
      'Setting new state: CoinInsertedState',
      'Setting new state: NoCoinState',
    ])
  })
})
