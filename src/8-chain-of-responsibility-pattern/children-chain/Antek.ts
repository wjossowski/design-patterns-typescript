import { Child } from './Child'
import { Shelf } from './Shelf'

export class Antek extends Child {
  constructor(tallerChild?: Child) {
    super(Shelf.HIGH, tallerChild)
  }
}
