import { FlightLegInterface } from './FlightLegInterface'

export interface FlightLegBuilderInterface {
  from: (from: string) => FlightLegBuilderInterface
  to: (to: string) => FlightLegBuilderInterface
  price: (price: number) => FlightLegBuilderInterface
  delayed: (delayed: boolean) => FlightLegBuilderInterface
  build: () => FlightLegInterface
}
