import { State } from './State'

export class Context {
  private state: State | null = null

  public getState() {
    return this.state
  }

  public setState(state: State) {
    this.state = state
  }

  public getInfo(): string {
    if (this.state) {
      return `Player is in ${this.state.getName()}`
    }

    return 'Undefined state'
  }
}
