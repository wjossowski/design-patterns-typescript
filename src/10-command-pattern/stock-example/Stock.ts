export class Stock {
  constructor(public readonly name: string, public quantity: number) {}

  public sell() {
    this.quantity--
  }

  public buy() {
    this.quantity++
  }
}
