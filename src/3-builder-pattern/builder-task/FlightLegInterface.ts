export interface FlightLegPayload {
  from: string
  to: string
  price: number
  delayed: boolean
}

export interface FlightLegInterface {
  setPrice: (price: number) => void
  setDelayed: (delayed: boolean) => void
  setFrom: (from: string) => void
  setTo: (to: string) => void
  toJson: () => FlightLegPayload
}
