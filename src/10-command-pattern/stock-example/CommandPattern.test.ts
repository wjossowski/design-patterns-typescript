import { Broker } from './Broker'
import { BuyStockOrder } from './BuyStockOrder'
import { SellStockOrder } from './SellStockOrder'
import { Stock } from './Stock'

describe('Command Order', () => {
  it('Runs with command broker', () => {
    const kghmStock = new Stock('KGHM', 20)
    const orlenStock = new Stock('ORLEN', 0)
    const broker = new Broker()

    broker.takeOrder(new BuyStockOrder(orlenStock))
    broker.takeOrder(new SellStockOrder(kghmStock))
    broker.takeOrder(new BuyStockOrder(orlenStock))
    broker.takeOrder(new BuyStockOrder(kghmStock))
    broker.takeOrder(new SellStockOrder(kghmStock))
    broker.placeOrders()
    expect(kghmStock.quantity).toEqual(19)
    expect(orlenStock.quantity).toEqual(2)

    broker.takeOrder(new SellStockOrder(orlenStock))
    broker.takeOrder(new BuyStockOrder(kghmStock))
    broker.placeOrders()
    expect(kghmStock.quantity).toEqual(20)
    expect(orlenStock.quantity).toEqual(1)
  })
})
