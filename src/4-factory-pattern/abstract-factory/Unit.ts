import { UnitType } from './UnitFactory'

export interface UnitData {
  hp: number
  damage: number
  defense: number
}

export abstract class Unit {
  public abstract readonly type: UnitType

  constructor(
    protected hp: number,
    protected damage: number,
    protected defense: number,
  ) {}

  public abstract move(): void

  toJson(): UnitData {
    return {
      hp: this.hp,
      damage: this.damage,
      defense: this.defense,
    }
  }
}
