import { FlightLeg } from './FlightLeg'
import { FlightLegInterface } from './FlightLegInterface'

describe('Builder', () => {
  it('Builds object from task', () => {
    const leg: FlightLegInterface = FlightLeg.getFlightLegBuilder(
      'Las Vegas',
      'Los Angeles',
    )
      .price(50)
      .build()

    expect(leg.toJson()).toEqual({
      from: 'Las Vegas',
      to: 'Los Angeles',
      price: 50,
      delayed: false,
    })
  })
})
