export abstract class Terrain {
  constructor(
    private readonly description: string,
    private readonly fuelCost: number,
  ) {}

  public getFuelCost() {
    return this.fuelCost
  }

  public getDescription() {
    return this.description
  }
}
