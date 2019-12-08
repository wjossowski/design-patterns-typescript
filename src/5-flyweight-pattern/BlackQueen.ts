import { ChessPiece } from './ChessPiece'

export class BlackQueen extends ChessPiece {
  constructor(name: string) {
    super(name, '6', 'c', 'Black')
  }
}
