import { Logger } from './Logger'
import { Animal } from './Animal'
import { Person } from './Person'
import { Shipment } from './Shipment'
import { NameTransportVisitor } from './NameTransportVisitor'
import { PriceTransportVisitor } from './PriceTransportVisitor'

describe('TransportVisitor Visitor test', () => {
  const animal = new Animal('dog', 30)
  const person = new Person('Dawid', 'Nowak', false)
  const shipment = new Shipment('PL', '4325452', false)

  const transportables = [animal, person, shipment]

  it('Passes NameTransport Visitor', () => {
    const logger = new Logger()
    const visitor = new NameTransportVisitor(logger)
    transportables.forEach((transportable) => visitor.visit(transportable))

    expect(logger.getLogs()).toEqual([
      `Animal kind: dog`,
      `Person name: Dawid Nowak`,
      `Shipment designation: PL-4325452`,
    ])
  })

  it('Passes PriveTransport Visitor', () => {
    const logger = new Logger()
    const visitor = new PriceTransportVisitor(logger)

    transportables.forEach((transportable) => visitor.visit(transportable))

    expect(logger.getLogs()).toEqual([
      `Price per kilometer for an animal: 6 PLN`,
      `Price per kilometer for a person: 3 PLN`,
      `Price per kilometer for a shipment: 2 PLN`,
    ])
  })
})
