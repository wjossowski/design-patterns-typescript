import { SmartAppMemento } from './SmartAppMemento'

export class SmartApp {
  private version: string = '1.0'
  public actions: string[] = []

  public changeVersion(version: string) {
    this.version = version
    this.actions.push(`Setting new version ${this.version}`)
  }

  public save(): SmartAppMemento {
    this.actions.push(`Backup version ${this.version}`)
    return new SmartAppMemento(this.version)
  }

  public load(memento: SmartAppMemento) {
    const newVersion = memento.getVersion()
    this.actions.push(`Loading version ${newVersion} at ${this.version}`)
    this.version = memento.getVersion()
  }
}
