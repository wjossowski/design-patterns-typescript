import { EggCooker } from './EggCooker'

export class Chef {
  private eggCooker?: EggCooker
  public readonly log: string[] = []
  constructor(private readonly name: string) {}

  public setEggCooker(cooker: EggCooker) {
    this.eggCooker = cooker
  }

  public cook() {
    if (!this.eggCooker) {
      throw new Error('No cooker set')
    }

    this.log.push(`${this.name} gotuje ${this.eggCooker.cookEgg()}`)
  }
}
