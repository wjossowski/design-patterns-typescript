import { MechanizedUnit } from './MechanizedUnit'

export class TankUnit extends MechanizedUnit {
  constructor(hp: number, damage: number, defense: number, color: string) {
    super(hp, damage, defense, color)
  }

  public move(): void {
    console.log('Tank moved')
  }
}
