import { InfantryUnit } from './InfrantryUnit'

export class RifflemanUnit extends InfantryUnit {
  public move(): void {
    console.log('Riffleman moved')
  }
}
