import { FlightLegBuilderInterface } from './FlightLegBuilderInterface'
import { FlightLegBulder } from './FlightLegBuilder'
import { FlightLegInterface, FlightLegPayload } from './FlightLegInterface'

export class FlightLeg implements FlightLegInterface {
  private price: number = 0
  private delayed: boolean = false
  private from: string = ''
  private to: string = ''

  public setPrice(price: number) {
    this.price = price
  }

  public setDelayed(delayed: boolean) {
    this.delayed = delayed
  }

  public setFrom(from: string) {
    this.from = from
  }

  public setTo(to: string) {
    this.to = to
  }

  public toJson(): FlightLegPayload {
    return {
      from: this.from,
      to: this.to,
      price: this.price,
      delayed: this.delayed,
    }
  }

  public static getFlightLegBuilder(
    from: string,
    to: string,
  ): FlightLegBuilderInterface {
    return new FlightLegBulder(new FlightLeg(), from, to)
  }
}
