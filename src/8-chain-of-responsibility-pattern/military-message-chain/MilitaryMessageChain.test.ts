import { Message } from './Message'
import { Seargeant } from './Seargeant'
import { Captain } from './Captain'
import { General } from './General'

describe('MilitaryMessage ChainOfResponsibility', () => {
  it('Delivers message to Seargeant', () => {
    const message = new Message('Prepare to war', 'Seargeant')
    const seargeant = new Seargeant('Sierzant')

    seargeant.processMessage(message)
    expect(message.delivered).toEqual(true)
    expect(message.deliveredTo).toEqual('Sierzant')
    expect(message.processedBy).toEqual([seargeant])
  })

  it('Delivers message to Captain', () => {
    const message = new Message('Prepare to war', 'Captain')
    const captain = new Captain('Kapitan')

    const seargeant = new Seargeant('Sierzant')
    seargeant.setSuperiorOfficer(captain)

    seargeant.processMessage(message)
    expect(message.delivered).toEqual(true)
    expect(message.deliveredTo).toEqual('Kapitan')
    expect(message.processedBy).toEqual([seargeant, captain])
  })

  it('Delivers message to General', () => {
    const message = new Message('Prepare to war', 'General')

    const general = new General('General')

    const captain = new Captain('Kapitan')
    captain.setSuperiorOfficer(general)

    const seargeant = new Seargeant('Sierzant')
    seargeant.setSuperiorOfficer(captain)

    seargeant.processMessage(message)
    expect(message.delivered).toEqual(true)
    expect(message.deliveredTo).toEqual('General')
    expect(message.processedBy).toEqual([seargeant, captain, general])
  })

  it('Unable to deliver message', () => {
    const message = new Message('Prepare to war', 'Marshall')

    const general = new General('General')

    const captain = new Captain('Kapitan')
    captain.setSuperiorOfficer(general)

    const seargeant = new Seargeant('Sierzant')
    seargeant.setSuperiorOfficer(captain)

    seargeant.processMessage(message)
    expect(message.delivered).toEqual(false)
    expect(message.processedBy).toEqual([seargeant, captain, general])
  })
})
