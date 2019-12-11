export class Robot {
  private isOn = false
  public actions: string[] = []

  public turnOn() {
    this.isOn = true
    this.actions.push('turning on')
  }

  public turnOff() {
    this.isOn = false
    this.actions.push('turning off')
  }

  public drill() {
    this.validate()
    this.actions.push('drilling')
  }

  public cut() {
    this.validate()
    this.actions.push('cutting')
  }

  private validate() {
    if (!this.isOn) {
      throw new Error('Robot not turned on!')
    }
  }
}
