import { CarStartingSequence } from './CarStartingSequence'

export class ClassicCarStarting extends CarStartingSequence {
  protected startTheIgnition(): void {
    this.steps.push('moving keys')
  }
  protected setTheGear(): void {
    this.steps.push('setting the gear')
  }
}
