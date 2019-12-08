import { InfantryUnit } from './InfrantryUnit'
import { MechanizedUnit } from './MechanizedUnit'
import { AirUnit } from './AirUnit'

export type InfantryUnitType = 'Rifleman'
export type MechanizedUnitType = 'Tank'
export type AirUnitType = 'Helicopter'

export abstract class UnitFactory {
  public abstract createInfantryUnit(type: InfantryUnitType): InfantryUnit
  public abstract createMechanizedUnit(type: MechanizedUnitType): MechanizedUnit
  public abstract createAirUnit(type: AirUnitType): AirUnit
}
