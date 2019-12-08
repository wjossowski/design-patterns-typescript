import { Unit } from './Unit'

export class RifflemanUnit extends Unit {
  constructor(hp: number, damage: number, defense: number) {
    super(hp, damage, defense)
  }

  public move(): void {
    console.log('Riffleman moved')
  }
}
