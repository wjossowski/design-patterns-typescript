import { MotherQuest } from './MotherQuest'
import { Ania } from './Ania'
import { Tomek } from './Tomek'
import { Antek } from './Antek'
import { Shelf } from './Shelf'

describe('Mother Quest ChainOfResponsibility', () => {
  it('passes the MotherQuest', () => {
    const quest = new MotherQuest(Shelf.HIGH)

    const tomek = new Tomek()
    const ania = new Ania()
    const antek = new Antek()

    tomek.setTallerChild(ania)
    ania.setTallerChild(antek)

    tomek.processRequest(quest)

    expect(antek.pickedFromShelf).toEqual(true)
  })
})
