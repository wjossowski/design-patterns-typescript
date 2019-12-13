import { State } from './State'
import { Context } from './Context'

export class StartState implements State {
  getName() {
    return 'StartState'
  }

  doAction(context: Context) {
    context.setState(this)
  }
}
