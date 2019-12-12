import { Visitable } from './Visitable'
import { TransportVisitor } from './TransportVisitor'

export class Shipment implements Visitable {
  constructor(
    private prefix: string,
    private serialNumber: string,
    private isLarge: boolean,
  ) {}

  public acceptVisitor(visitor: TransportVisitor) {
    visitor.visit(this)
  }

  public getPrefix() {
    return this.prefix
  }

  public setPrefix(prefix: string) {
    this.prefix = prefix
  }

  public getSerialNumber() {
    return this.serialNumber
  }

  public setSerialNumber(serialNumber: string) {
    this.serialNumber = serialNumber
  }

  public getIsLarge() {
    return this.isLarge
  }

  public setIsLarge(isLarge: boolean) {
    this.isLarge = isLarge
  }
}
