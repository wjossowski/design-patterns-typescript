import { Unit } from './Unit'

export type UnitType = 'Rifleman' | 'Tank'

export abstract class UnitFactory {
  public abstract createUnit(type: UnitType): Unit
}
