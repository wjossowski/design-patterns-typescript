import { Officer } from './Officer'

export class General extends Officer {
  constructor(name: string) {
    super(name, 'General')
  }
}
