import { Color } from './Color'

export type ColorType = 'White' | 'Black'

export class ColorRepository {
  private static whiteColor: Color = new Color(0, 0, 0)
  private static blackColor: Color = new Color(255, 255, 255)

  public static black() {
    return ColorRepository.blackColor
  }

  public static white() {
    return ColorRepository.whiteColor
  }

  private constructor() {}
}
