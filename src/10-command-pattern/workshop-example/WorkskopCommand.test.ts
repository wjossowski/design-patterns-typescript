import { Robot } from './Robot'
import { Queue } from './Queue'
import * as commands from './commands'

describe('Workshop command pattern test', () => {
  it('Queues commands correctly', () => {
    const robot = new Robot()
    const queue = new Queue()

    queue.queueCommand(new commands.TurnOnCommand(robot))
    queue.queueCommand(new commands.DrillCommand(robot))
    queue.queueCommand(new commands.CutCommand(robot))
    queue.queueCommand(new commands.TurnOffCommand(robot))

    expect(robot.actions).toEqual([])

    queue.run()
    expect(robot.actions).toEqual([
      'turning on',
      'drilling',
      'cutting',
      'turning off',
    ])
  })

  it('Fails on running drill command without power', () => {
    const robot = new Robot()
    const queue = new Queue()
    queue.queueCommand(new commands.DrillCommand(robot))

    expect(() => queue.run()).toThrowError()
  })

  it('Fails on running cut command without power', () => {
    const robot = new Robot()
    const queue = new Queue()
    queue.queueCommand(new commands.CutCommand(robot))

    expect(() => queue.run()).toThrowError()
  })
})
