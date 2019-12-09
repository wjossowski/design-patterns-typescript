import { Message } from './Message'

export type OfficerRank = 'Seargeant' | 'Captain' | 'General' | 'Marshall'

export abstract class Officer {
  constructor(
    private readonly name: string,
    private readonly officerRank: OfficerRank,
    private superiorOfficer: Officer | null = null,
  ) {}

  public processMessage(message: Message) {
    message.processedBy.push(this)
    if (this.officerRank === message.deliveryRank) {
      message.delivered = true
      message.deliveredTo = this.name
    } else if (this.superiorOfficer) {
      this.superiorOfficer.processMessage(message)
    }
  }

  public setSuperiorOfficer(superiorOfficer: Officer) {
    this.superiorOfficer = superiorOfficer
  }
}
