import { VisitorInterface } from './VisitorInterface'
import { ElementA } from './ElementA'
import { ElementB } from './ElementB'

export class Visitor implements VisitorInterface {
  constructor(
    private readonly newName: string,
    private readonly newVersion: number,
  ) {}

  visitElement(element: ElementA | ElementB) {
    if (element instanceof ElementA) {
      element.setName(this.newName)
    }
    if (element instanceof ElementB) {
      element.setVersion(this.newVersion)
    }
  }
}
