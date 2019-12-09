import { TypeOfTransport } from './TypeOfTransport'

export abstract class WeekDay {
  protected records: string[] = []
  public everyDayIsExactlyTheSame(typeOfTransport: TypeOfTransport) {
    this.wakeUp()
    this.getReady()
    const time = this.goToWork(typeOfTransport)
    this.summary(time)
    this.work()
    this.goHome()
  }

  public getRecords() {
    return this.records
  }

  protected goHome() {
    this.records.push('go-home')
  }

  protected abstract work(): void
  protected abstract goToWork(typeOfTransport: TypeOfTransport): number

  protected summary(time: number) {
    this.records.push(`commute-time-took-${time}-minutes`)
  }

  protected insertRecord(record: string) {
    this.records.push(record)
  }

  private wakeUp() {
    this.records.push('waking-up')
  }

  private getReady() {
    this.records.push('getting-ready')
  }
}
