import { State } from './State'
import { CoffeeMachine } from '../CoffeeMachine'
import { NoCoinState } from './NoCoinState'

export class CoffeePouredState implements State {
  public insertTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('Take the cup first')
  }
  public pushTheButton(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('Take the cup first')
  }
  public takeTheCup(coffeeMachine: CoffeeMachine) {
    coffeeMachine.setState(new NoCoinState())
  }
  public returnTheCoin(coffeeMachine: CoffeeMachine) {
    coffeeMachine.actions.push('Nothing to return - take your cup')
  }
}
