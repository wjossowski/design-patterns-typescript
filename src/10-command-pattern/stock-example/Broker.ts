import { OrderInterface } from './OrderInterface'

export class Broker {
  orders: OrderInterface[] = []

  public takeOrder(order: OrderInterface) {
    this.orders.push(order)
  }

  public placeOrders() {
    this.orders.forEach((order) => order.execute())
    this.orders = []
  }
}
