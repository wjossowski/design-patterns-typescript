import { ATMMachine } from './ATMMachine'
import { BankSystem } from './BankSystem'

export class ATMMachineFacade {
  private readonly atm: ATMMachine = new ATMMachine()
  private readonly bankSystem: BankSystem = new BankSystem()

  public withdrawMoney() {
    const pin = this.atm.enterPin()
    if (
      this.bankSystem.validatePin(pin) &&
      this.bankSystem.validateTransaction()
    ) {
      this.atm.withdrawCash()
    }
  }
}
