import {
  UnitFactory,
  InfantryUnitType,
  MechanizedUnitType,
  AirUnitType,
} from './UnitFactory'
import { InfantryUnit } from './InfrantryUnit'
import { MechanizedUnit } from './MechanizedUnit'
import { RifflemanUnit } from './RiflemanUnit'
import { TankUnit } from './TankUnit'
import { AirUnit } from './AirUnit'
import { Helicopter } from './Helicopter'

export class BlueUnitFactory extends UnitFactory {
  public createInfantryUnit(type: InfantryUnitType): InfantryUnit {
    switch (type) {
      case 'Rifleman':
        return new RifflemanUnit(100, 10, 30, 'blue')
      default:
        throw new Error('Not implemented.')
    }
  }
  public createMechanizedUnit(type: MechanizedUnitType): MechanizedUnit {
    switch (type) {
      case 'Tank':
        return new TankUnit(500, 50, 150, 'blue')
      default:
        throw new Error('Not implemented.')
    }
  }
  public createAirUnit(type: AirUnitType): AirUnit {
    switch (type) {
      case 'Helicopter':
        return new Helicopter(100, 50, 150, 'blue')
      default:
        throw new Error('Not implemented.')
    }
  }
}
