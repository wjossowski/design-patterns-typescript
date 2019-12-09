import { ClassicCarStarting } from './ClassicCarStarting'

export class ButtonStartSequence extends ClassicCarStarting {
  protected startTheIgnition(): void {
    this.steps.push('pushing button')
  }
}
