import { Child } from './Child'
import { Shelf } from './Shelf'

export class Tomek extends Child {
  constructor(tallerChild?: Child) {
    super(Shelf.LOW, tallerChild)
  }
}
