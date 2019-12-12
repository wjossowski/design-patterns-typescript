import { ElementInterface } from './ElementInterface'
import { VisitorInterface } from './VisitorInterface'

export class ElementA implements ElementInterface {
  private name: string = ''

  accept(visitor: VisitorInterface) {
    visitor.visitElement(this)
  }

  public getName() {
    return this.name
  }

  public setName(name: string) {
    this.name = name
  }
}
