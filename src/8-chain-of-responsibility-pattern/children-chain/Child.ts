import { MotherQuest } from './MotherQuest'
import { Shelf } from './Shelf'

export abstract class Child {
  public pickedFromShelf: boolean = false

  constructor(
    private readonly shelf: Shelf,
    private tallerChild: Child | null = null,
  ) {}

  public processRequest(request: MotherQuest) {
    if (this.shelf === request.shelf) {
      this.pickedFromShelf = true
    } else if (this.tallerChild) {
      this.tallerChild.processRequest(request)
    }
  }

  public setTallerChild(tallerChild: Child) {
    this.tallerChild = tallerChild
  }

  public getTallerChild() {
    return this.tallerChild
  }
}
