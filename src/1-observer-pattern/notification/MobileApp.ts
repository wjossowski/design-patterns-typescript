import { Order } from '../order/Order'
import { IObserver } from './IObserver'

export class MobileApp implements IObserver {
  public updateOrderStatus(order: Order) {
    console.log(
      `MobileApp: Zamowienie numer ${order.getOrderNumber()} zmienilo status na ${order.getOrderStatus()}`,
    )
  }
}
