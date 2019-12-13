import { Context } from './Context'

export interface State {
  getName(): string
  doAction(constext: Context): void
}
