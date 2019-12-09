import { Terrain } from './Terrain'

export type TerrainDecorableTypes = 'Flat' | 'Hilly' | 'Mossy' | 'Grassy'

export abstract class TerrainDecorator extends Terrain {
  constructor(
    protected readonly terrain: Terrain,
    private readonly fuelCostModifier: number,
    modifierDescription: TerrainDecorableTypes,
  ) {
    super(modifierDescription + terrain.getDescription(), terrain.getFuelCost())
  }

  public getFuelCost(): number {
    return this.terrain.getFuelCost() + this.fuelCostModifier
  }
}
