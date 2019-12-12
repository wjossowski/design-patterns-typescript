import { ElementA } from './ElementA'
import { ElementB } from './ElementB'

export interface VisitorInterface {
  visitElement(element: ElementA | ElementB): void
}
