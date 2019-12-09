import { CarStartingSequence } from './CarStartingSequence'

export class AutomaticGearboxSequence extends CarStartingSequence {
  protected startTheIgnition(): void {
    this.steps.push('starting ignition')
  }
  protected setTheGear(): void {}
}
