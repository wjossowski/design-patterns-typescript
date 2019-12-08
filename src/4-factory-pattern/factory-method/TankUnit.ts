import { Unit } from './Unit'

export class TankUnit extends Unit {
  constructor(hp: number, damage: number, defense: number) {
    super(hp, damage, defense)
  }

  public move(): void {
    console.log('Tank moved')
  }
}
