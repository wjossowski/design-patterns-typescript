import { ElementInterface } from './ElementInterface'
import { VisitorInterface } from './VisitorInterface'

export class ElementB implements ElementInterface {
  private version: number = 0

  public accept(visitor: VisitorInterface) {
    visitor.visitElement(this)
  }

  public getVersion() {
    return this.version
  }

  public setVersion(version: number) {
    this.version = version
  }
}
