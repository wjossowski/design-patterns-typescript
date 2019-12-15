import { State } from './states/State'
import { NoCoinState } from './states/NoCoinState'

export class CoffeeMachine {
  public actions: string[] = []
  private state: State = new NoCoinState()

  public insertTheCoin() {
    this.state.insertTheCoin(this)
  }

  public pushTheButton() {
    this.state.pushTheButton(this)
  }

  public takeTheCup() {
    this.state.takeTheCup(this)
  }

  public returnTheCoin() {
    this.state.returnTheCoin(this)
  }

  public setState(state: State) {
    this.actions.push(`Setting new state: ${state.constructor.name}`)
    this.state = state
  }
}
