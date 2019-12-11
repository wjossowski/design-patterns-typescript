import { Command } from './commands/Command'

export class Queue {
  private commands: Command[] = []

  public queueCommand(command: Command) {
    this.commands.push(command)
  }

  public run() {
    this.commands.forEach((command) => command.execute())
    this.commands = []
  }
}
