import { SmartAppMemento } from './SmartAppMemento'

export class SmartAppCaretaker {
  private versions: SmartAppMemento[] = []

  public addMemento(memento: SmartAppMemento) {
    this.versions.push(memento)
  }

  public getMemento(id: number) {
    return this.versions[id]
  }
}
