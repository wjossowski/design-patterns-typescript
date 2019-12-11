import { OperatingSystemMemento } from './OperatingSystemMemento'

export class OperatingSystem {
  public log: string[] = []
  private backupNumber: number = 0
  private backupDate: Date = new Date()

  public createBackup() {
    this.backupNumber++
    this.backupDate = new Date()

    this.log.push(
      `Creating backup: ${this.backupNumber}@${this.backupDate.toString()}`,
    )
  }

  public save(): OperatingSystemMemento {
    this.log.push(
      `Saving snapshot: ${this.backupNumber}@${this.backupDate.toString()}`,
    )
    return new OperatingSystemMemento(this.backupNumber, this.backupDate)
  }

  public load(snapshot: OperatingSystemMemento) {
    const backupNumber = snapshot.getBackupNumber()
    const backupDate = snapshot.getBackupDate()
    this.log.push(
      `Loading snapshot: ${backupNumber}@${backupDate.toString()}. Current state: ${
        this.backupNumber
      }@${this.backupDate.toString()}`,
    )

    this.backupNumber = backupNumber
    this.backupDate = backupDate
  }
}
