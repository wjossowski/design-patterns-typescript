import { TransportVisitor } from './TransportVisitor'
import { Animal } from './Animal'
import { Person } from './Person'
import { Shipment } from './Shipment'
import { Logger } from './Logger'

export class PriceTransportVisitor implements TransportVisitor {
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
    const finalPrice = animal.getWeight() * 0.2
    this.logEntry('an animal', finalPrice)
  }

  private visitPerson(person: Person) {
    const regularPrice = 6
    const finalPrice = person.isRegular() ? regularPrice : regularPrice / 2
    this.logEntry('a person', finalPrice)
  }

  private visitShipment(shipment: Shipment) {
    const regularPrice = 2
    const finalPrice = shipment.getIsLarge() ? regularPrice * 3 : regularPrice
    this.logEntry('a shipment', finalPrice)
  }

  private logEntry(type: string, price: number) {
    this.logger.log(`Price per kilometer for ${type}: ${price} PLN`)
  }
}
