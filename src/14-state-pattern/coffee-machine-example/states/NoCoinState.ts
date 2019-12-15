import { State } from './State'
import { CoffeeMachine } from '../CoffeeMachine'
import { CoinInsertedState } from './CoinInsertedState'

export class NoCoinState implements State {
  public insertTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.setState(new CoinInsertedState())
  }
  public pushTheButton(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('No coin inserted')
  }
  public takeTheCup(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('No coin inserted')
  }
  public returnTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('No coin inserted')
  }
}
