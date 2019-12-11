export class OperatingSystemMemento {
  constructor(
    private readonly backupNumber: number,
    private readonly backupDate: Date,
  ) {}

  public getBackupNumber() {
    return this.backupNumber
  }

  public getBackupDate() {
    return this.backupDate
  }
}
