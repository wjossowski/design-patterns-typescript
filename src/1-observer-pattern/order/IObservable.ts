import { IObserver } from '../notification/IObserver'

export interface IObservable {
  addObserver(observer: IObserver): void
  notify(): void
}
