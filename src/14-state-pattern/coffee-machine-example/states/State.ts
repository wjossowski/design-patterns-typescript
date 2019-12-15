import { CoffeeMachine } from '../CoffeeMachine'

export interface State {
  insertTheCoin(coffeeMachine: CoffeeMachine): void
  pushTheButton(coffeeMachine: CoffeeMachine): void
  takeTheCup(coffeeMachine: CoffeeMachine): void
  returnTheCoin(coffeeMachine: CoffeeMachine): void
}
