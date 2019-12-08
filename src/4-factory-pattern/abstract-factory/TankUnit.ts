import { MechanizedUnit } from './MechanizedUnit'

export class TankUnit extends MechanizedUnit {
  public move(): void {
    console.log('Tank moved')
  }
}
