export interface UnitData {
  hp: number
  damage: number
  defense: number
  color: string
}

export abstract class Unit {
  constructor(
    protected hp: number,
    protected damage: number,
    protected defense: number,
    protected color: string,
  ) {}

  public abstract move(): void
}
