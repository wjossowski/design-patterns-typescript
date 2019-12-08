import { Unit } from './Unit'
import { UnitType } from './UnitFactory'

export class RifflemanUnit extends Unit {
  public readonly type: UnitType = 'Rifleman'

  constructor(hp: number, damage: number, defense: number) {
    super(hp, damage, defense)
  }

  public move(): void {
    console.log('Riffleman moved')
  }
}
