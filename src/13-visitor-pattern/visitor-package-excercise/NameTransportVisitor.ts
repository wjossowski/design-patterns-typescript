import { TransportVisitor } from './TransportVisitor'
import { Animal } from './Animal'
import { Person } from './Person'
import { Shipment } from './Shipment'
import { Logger } from './Logger'

export class NameTransportVisitor implements TransportVisitor {
  constructor(private readonly logger: Logger) {}

  public visit(visitable: Animal | Person | Shipment) {
    if (visitable instanceof Animal) {
      this.visitAnimal(visitable)
    }
    if (visitable instanceof Person) {
      this.visitPerson(visitable)
    }
    if (visitable instanceof Shipment) {
      this.visitShipment(visitable)
    }
  }

  private visitAnimal(animal: Animal) {
    this.logger.log('Animal kind:', animal.getKind())
  }

  private visitPerson(person: Person) {
    this.logger.log('Person name:', person.getFirstName(), person.getLastName())
  }

  private visitShipment(shipment: Shipment) {
    const prefix = `${shipment.getPrefix()}-${shipment.getSerialNumber()}`
    this.logger.log('Shipment designation:', prefix)
  }
}
