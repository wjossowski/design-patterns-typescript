import { Visitable } from './Visitable'
import { TransportVisitor } from './TransportVisitor'

export class Animal implements Visitable {
  constructor(private kind: string, private weight: number) {}

  public acceptVisitor(visitor: TransportVisitor) {
    visitor.visit(this)
  }

  public getKind() {
    return this.kind
  }

  public setKind(kind: string) {
    this.kind = kind
  }

  public getWeight() {
    return this.weight
  }

  public setWeight(weight: number) {
    this.weight = weight
  }
}
