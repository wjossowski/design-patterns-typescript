import { ChessPiece } from './ChessPiece'

export class WhitePiece extends ChessPiece {
  constructor(name: string, numberPosition: string, letterPosition: string) {
    super(name, numberPosition, letterPosition, 'White')
  }
}
