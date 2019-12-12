import { PricingStrategy } from './PricingStrategy'

export class RegularPrice implements PricingStrategy {
  calculatePrice(price: number, isSignedUpForNewsletter: boolean): number {
    if (isSignedUpForNewsletter) {
      throw new Error('Invalid pricing strategy')
    }

    return price
  }
}
