import { TransportVisitor } from './TransportVisitor'

export interface Visitable {
  acceptVisitor(visitor: TransportVisitor): void
}
