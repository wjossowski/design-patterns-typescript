export interface PricingStrategy {
  calculatePrice(price: number, isSignedUpForNewsletter: boolean): number
}
