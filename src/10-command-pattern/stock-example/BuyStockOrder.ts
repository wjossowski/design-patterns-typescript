import { OrderInterface } from './OrderInterface'
import { Stock } from './Stock'

export class BuyStockOrder implements OrderInterface {
  constructor(private readonly stock: Stock) {}
  public execute() {
    this.stock.buy()
  }
}
