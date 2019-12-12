export class Logger {
  private logs: string[] = []

  public log(...args: string[]) {
    this.logs.push(args.join(' '))
  }

  public getLogs() {
    return this.logs
  }
}
