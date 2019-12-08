import { InfantryUnit } from './InfrantryUnit'

export class RifflemanUnit extends InfantryUnit {
  constructor(hp: number, damage: number, defense: number, color: string) {
    super(hp, damage, defense, color)
  }

  public move(): void {
    console.log('Riffleman moved')
  }
}
