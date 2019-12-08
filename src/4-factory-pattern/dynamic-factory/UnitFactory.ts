import { Unit } from './Unit'
import { UnitData } from '../factory-method/Unit'

export type UnitType = 'Rifleman' | 'Tank'

type UnitConstructorType = {
  new (...args: any): Unit
}

type UnitRecord = {
  UnitConstructor: UnitConstructorType
  data: UnitData
}

export abstract class UnitFactory {
  protected readonly unitConstructors: Map<string, UnitRecord> = new Map()

  public registerType(type: UnitType, record: UnitRecord) {
    this.unitConstructors.set(type, record)
  }

  public createUnit(type: UnitType): Unit {
    const record = this.unitConstructors.get(type)
    if (!record) {
      throw new Error('Missing Unit type')
    }

    const { UnitConstructor, data } = record

    return new UnitConstructor(data.hp, data.damage, data.defense)
  }
}
