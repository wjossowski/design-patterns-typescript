import { State } from './State'
import { CoffeeMachine } from '../CoffeeMachine'
import { CoffeePouredState } from './CoffeePouredState'
import { NoCoinState } from './NoCoinState'

export class CoinInsertedState implements State {
  public insertTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('Coin already inserted')
  }
  public pushTheButton(coffeeMachine: CoffeeMachine) {
    coffeeMachine.setState(new CoffeePouredState())
  }
  public takeTheCup(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('Push the button first')
  }
  public returnTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.setState(new NoCoinState())
  }
}
