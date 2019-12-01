import { OrderStatus } from './OrderStatus'
import { IObservable } from './IObservable'
import { IObserver } from '../notification/IObserver'

export class Order implements IObservable {
  private readonly observers: IObserver[] = []

  constructor(private orderNumber: number, private orderStatus: OrderStatus) {}

  public getOrderNumber = () => this.orderNumber

  public getOrderStatus = () => this.orderStatus
  public setOrderStatus = (orderStatus: OrderStatus) => {
    this.orderStatus = orderStatus
    this.notify()
  }

  public addObserver(observer: IObserver): void {
    this.observers.push(observer)
  }

  public notify(): void {
    this.observers.forEach((listener) => {
      listener.updateOrderStatus(this)
    })
  }
}
