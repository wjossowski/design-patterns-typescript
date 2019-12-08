import { InfantryUnit } from './InfrantryUnit'
import { MechanizedUnit } from './MechanizedUnit'

export type InfantryUnitType = 'Rifleman'
export type MechanizedUnitType = 'Tank'

export abstract class UnitFactory {
  public abstract createInfantryUnit(type: InfantryUnitType): InfantryUnit
  public abstract createMechanizedUnit(type: MechanizedUnitType): MechanizedUnit
}
