import { OfficerRank, Officer } from './Officer'

export class Message {
  public delivered: boolean = false
  public deliveredTo: string = ''
  public processedBy: Officer[] = []

  constructor(
    public readonly content: string,
    public readonly deliveryRank: OfficerRank,
  ) {}
}
