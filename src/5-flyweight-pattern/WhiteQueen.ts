import { ChessPiece } from './ChessPiece'

export class WhiteQueen extends ChessPiece {
  constructor(name: string) {
    super(name, '1', 'd', 'White')
  }
}
