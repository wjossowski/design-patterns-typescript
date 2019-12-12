import { ElementA } from './ElementA'
import { ElementB } from './ElementB'
import { Visitor } from './Visitor'

describe('Element Visitor test', () => {
  it('Visits both elements correctly', () => {
    const elementA = new ElementA()
    const elementB = new ElementB()

    expect(elementA.getName()).toEqual('')
    expect(elementB.getVersion()).toEqual(0)

    const newNameVersionVisitor = new Visitor('New Name', 2)

    elementA.accept(newNameVersionVisitor)

    expect(elementA.getName()).toEqual('New Name')
    expect(elementB.getVersion()).toEqual(0)

    elementB.accept(newNameVersionVisitor)

    expect(elementA.getName()).toEqual('New Name')
    expect(elementB.getVersion()).toEqual(2)
  })
})
