import { PricingStrategy } from './pricing/PricingStrategy'

export class PricingCalculator {
  private pricingStrategy?: PricingStrategy

  public setPricingStrategy(pricingStrategy: PricingStrategy) {
    this.pricingStrategy = pricingStrategy
  }

  public calculatePrice(price: number, isSignedUpForNewsletter: boolean) {
    if (!this.pricingStrategy) {
      throw new Error('No strategy set up')
    }

    return this.pricingStrategy.calculatePrice(price, isSignedUpForNewsletter)
  }
}
