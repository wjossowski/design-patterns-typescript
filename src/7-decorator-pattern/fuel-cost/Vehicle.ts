import { Terrain } from './Terrain'

export class Vehicle {
  constructor(private readonly fuelCost: number) {}

  getFuelCost(terrain: Terrain) {
    return this.fuelCost + terrain.getFuelCost()
  }
}
