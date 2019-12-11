import { Command } from './Command'
import { Robot } from '../Robot'

export class CutCommand implements Command {
  constructor(private readonly robot: Robot) {}
  public execute() {
    this.robot.cut()
  }
}
