import { BlackQueen } from './BlackQueen'
import { BlackPiece } from './BlackPiece'

import { WhitePiece } from './WhitePiece'
import { WhiteQueen } from './WhiteQueen'

describe('Flyweight', () => {
  it('references the same object for multiple chess pieces', () => {
    const blackPawn = new BlackPiece('Czarny Pionek', '7', 'A')
    const whitePawn = new WhitePiece('Biały Pionek', '2', 'A')
    const blackQueen = new BlackQueen('Czarna Królowa')
    const whiteQueen = new WhiteQueen('Czarna Królowa')

    expect(blackPawn.getColor() === blackQueen.getColor())
    expect(whitePawn.getColor() === whiteQueen.getColor())
  })
})
