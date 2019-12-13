import { State } from './State'
import { Context } from './Context'

export class StopState implements State {
  getName() {
    return 'StopState'
  }
  doAction(context: Context) {
    context.setState(this)
  }
}
