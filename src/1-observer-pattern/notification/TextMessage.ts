import { Order } from '../order/Order'
import { IObserver } from './IObserver'

export class TextMessage implements IObserver {
  public updateOrderStatus(order: Order) {
    console.log(
      `SMS: Zamowienie numer ${order.getOrderNumber()} zmienilo status na ${order.getOrderStatus()}`,
    )
  }
}
