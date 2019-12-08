import { UnitFactory, UnitType } from './UnitFactory'
import { Unit } from './Unit'
import { RifflemanUnit } from './RiflemanUnit'
import { TankUnit } from './TankUnit'

export class GameUnitFactory extends UnitFactory {
  public createUnit(type: UnitType): Unit {
    switch (type) {
      case 'Rifleman':
        return new RifflemanUnit(100, 50, 50)
      case 'Tank':
        return new TankUnit(200, 500, 500)
      default:
        throw new Error('Method not implemented.')
    }
  }
}
