import { RegularPrice, SalePrice } from './pricing'
import { PricingCalculator } from './PricingCalculator'

describe('SalePricingCalculator Strategy', () => {
  it('throws an error if strategy is not set up', () => {
    const pricingCalculator = new PricingCalculator()
    expect(() => pricingCalculator.calculatePrice(100, false)).toThrowError()
  })
  it('returns normal price if user is not signed to newsletter for regular', () => {
    const pricingCalculator = new PricingCalculator()
    pricingCalculator.setPricingStrategy(new RegularPrice())
    expect(pricingCalculator.calculatePrice(100, false)).toEqual(100)
  })
  it('returns discount price if user is signed to newsletter for sale', () => {
    const pricingCalculator = new PricingCalculator()
    pricingCalculator.setPricingStrategy(new SalePrice())
    expect(pricingCalculator.calculatePrice(100, true)).toEqual(50)
  })
  it('throws error if user is signed to newsletter for regular', () => {
    const pricingCalculator = new PricingCalculator()
    pricingCalculator.setPricingStrategy(new RegularPrice())
    expect(() => pricingCalculator.calculatePrice(100, true)).toThrowError()
  })
  it('throws error if user is not signed to newsletter for sale', () => {
    const pricingCalculator = new PricingCalculator()
    pricingCalculator.setPricingStrategy(new SalePrice())
    expect(() => pricingCalculator.calculatePrice(100, false)).toThrowError()
  })
})
