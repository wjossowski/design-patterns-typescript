import { VisitorInterface } from './VisitorInterface'

export interface ElementInterface {
  accept(visitor: VisitorInterface): void
}
