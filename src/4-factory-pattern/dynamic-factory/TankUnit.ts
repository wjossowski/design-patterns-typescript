import { Unit } from './Unit'
import { UnitType } from './UnitFactory'

export class TankUnit extends Unit {
  public readonly type: UnitType = 'Tank'

  constructor(hp: number, damage: number, defense: number) {
    super(hp, damage, defense)
  }

  public move(): void {
    console.log('Tank moved')
  }
}
