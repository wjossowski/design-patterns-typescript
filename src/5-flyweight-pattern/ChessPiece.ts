import { Color } from './Color'
import { ColorType, ColorRepository } from './ColorRepository'

export class ChessPiece {
  public readonly color: Color
  constructor(
    public readonly name: string,
    public readonly numberPosition: string,
    public readonly letterPosition: string,
    color: ColorType,
  ) {
    switch (color) {
      case 'Black':
        this.color = ColorRepository.black()
        break
      case 'White':
        this.color = ColorRepository.white()
        break
      default:
        throw new Error('Invalid Color')
    }
  }

  public getColor(): Color {
    return this.color
  }
}
