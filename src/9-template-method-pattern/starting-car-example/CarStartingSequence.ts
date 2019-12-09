export abstract class CarStartingSequence {
  protected readonly steps: string[] = []

  public startTheCar() {
    this.fastenSeatbelts()
    this.startTheIgnition()
    this.setTheGear()
    this.go()
  }

  public getSteps() {
    return this.steps
  }

  private fastenSeatbelts() {
    this.steps.push('fasting seatbelts')
  }

  protected abstract startTheIgnition(): void
  protected abstract setTheGear(): void

  private go() {
    this.steps.push('go')
  }
}
