import { Visitable } from './Visitable'
import { TransportVisitor } from './TransportVisitor'

export class Person implements Visitable {
  constructor(
    private firstName: string,
    private lastName: string,
    private isRegularCustomer: boolean,
  ) {}

  public acceptVisitor(visitor: TransportVisitor) {
    visitor.visit(this)
  }

  public getFirstName() {
    return this.firstName
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName
  }

  public getLastName() {
    return this.lastName
  }

  public setLastName(lastName: string) {
    this.lastName = lastName
  }

  public isRegular() {
    return this.isRegularCustomer
  }

  public setRegular(isRegular: boolean) {
    this.isRegularCustomer = isRegular
  }
}
