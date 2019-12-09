import { WeekDay } from './WeekDay'
import { TypeOfTransport } from './TypeOfTransport'

export class UnemployedDay extends WeekDay {
  protected work(): void {}
  protected goToWork(_typeOfTransport: TypeOfTransport): number {
    return 0
  }
}
