import { FlightLegBuilderInterface } from './FlightLegBuilderInterface'
import { FlightLegInterface } from './FlightLegInterface'

export class FlightLegBulder implements FlightLegBuilderInterface {
  constructor(private myLeg: FlightLegInterface, from: string, to: string) {
    this.from(from).to(to)
  }

  public from(from: string): FlightLegBuilderInterface {
    this.myLeg.setFrom(from)
    return this
  }

  public to(to: string): FlightLegBuilderInterface {
    this.myLeg.setTo(to)
    return this
  }

  public price(price: number): FlightLegBuilderInterface {
    this.myLeg.setPrice(price)
    return this
  }

  public delayed(delayed: boolean): FlightLegBuilderInterface {
    this.myLeg.setDelayed(delayed)
    return this
  }

  public build(): FlightLegInterface {
    return this.myLeg
  }
}
