import { Animal } from './Animal'
import { Person } from './Person'
import { Shipment } from './Shipment'

export interface TransportVisitor {
  visit(visitable: Animal | Person | Shipment): void
}
