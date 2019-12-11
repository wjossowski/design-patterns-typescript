import { OperatingSystemMemento } from './OperatingSystemMemento'

export class OperatingSystemCaretaker {
  private currentSnapshot?: OperatingSystemMemento

  public makeSnapshot(snapshot: OperatingSystemMemento) {
    this.currentSnapshot = snapshot
  }

  public getSnapshot() {
    if (!this.currentSnapshot) {
      throw new Error('No snapshot created')
    }

    return this.currentSnapshot
  }
}
