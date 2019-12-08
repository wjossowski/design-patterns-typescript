export interface UnitData {
  hp: number
  damage: number
  defense: number
}

export abstract class Unit {
  constructor(
    protected hp: number,
    protected damage: number,
    protected defense: number,
  ) {}

  public abstract move(): void
}
