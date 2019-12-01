import { IObservable } from '../order/IObservable'

export interface IObserver {
  updateOrderStatus(order: IObservable): void
}
