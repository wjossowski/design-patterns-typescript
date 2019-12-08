import { ChessPiece } from './ChessPiece'

export class BlackPiece extends ChessPiece {
  constructor(name: string, numberPosition: string, letterPosition: string) {
    super(name, numberPosition, letterPosition, 'Black')
  }
}
