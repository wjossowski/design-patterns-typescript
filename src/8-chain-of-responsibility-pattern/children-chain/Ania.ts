import { Child } from './Child'
import { Shelf } from './Shelf'

export class Ania extends Child {
  constructor(tallerChild?: Child) {
    super(Shelf.MEDIUM, tallerChild)
  }
}
