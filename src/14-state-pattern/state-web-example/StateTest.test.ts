import { Context } from './Context'
import { StartState } from './StartState'
import { StopState } from './StopState'

describe('StateWebExample Pattern', () => {
  it('executes proper states', () => {
    const context = new Context()

    expect(context.getInfo()).toEqual('Undefined state')

    const startState = new StartState()
    context.setState(startState)
    expect(context.getInfo()).toEqual('Player is in StartState')

    const stopState = new StopState()
    context.setState(stopState)
    expect(context.getInfo()).toEqual('Player is in StopState')
  })
})
