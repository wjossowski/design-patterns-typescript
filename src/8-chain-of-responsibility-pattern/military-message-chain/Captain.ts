import { Officer } from './Officer'

export class Captain extends Officer {
  constructor(name: string) {
    super(name, 'Captain')
  }
}
