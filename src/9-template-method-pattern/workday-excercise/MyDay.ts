import { WeekDay } from './WeekDay'
import { TypeOfTransport } from './TypeOfTransport'

export class MyDay extends WeekDay {
  protected work(): void {
    this.records.push('work-work')
  }
  protected goToWork(typeOfTransport: TypeOfTransport) {
    switch (typeOfTransport) {
      case TypeOfTransport.BIKE:
        return 25
      case TypeOfTransport.CAR:
        return 15
      case TypeOfTransport.TRAM:
        return 20
    }
  }
}
