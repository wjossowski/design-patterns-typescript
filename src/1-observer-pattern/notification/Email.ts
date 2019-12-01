import { Order } from '../order/Order'
import { IObserver } from './IObserver'

export class Email implements IObserver {
  public updateOrderStatus(order: Order) {
    console.log(
      `Email: Zamowienie numer ${order.getOrderNumber()} zmienilo status na ${order.getOrderStatus()}`,
    )
  }
}
