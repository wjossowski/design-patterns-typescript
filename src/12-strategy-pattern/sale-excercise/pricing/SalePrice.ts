import { PricingStrategy } from './PricingStrategy'

export class SalePrice implements PricingStrategy {
  calculatePrice(price: number, isSignedUpForNewsletter: boolean): number {
    if (!isSignedUpForNewsletter) {
      throw new Error('Invalid pricing strategy')
    }

    return price / 2
  }
}
