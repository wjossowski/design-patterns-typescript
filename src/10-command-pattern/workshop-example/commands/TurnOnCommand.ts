import { Command } from './Command'
import { Robot } from '../Robot'

export class TurnOnCommand implements Command {
  constructor(private readonly robot: Robot) {}
  public execute() {
    this.robot.turnOn()
  }
}
