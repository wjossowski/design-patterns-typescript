import { Vehicle } from './Vehicle'
import { GrassyTerrain } from './GrassyTerrain'
import { HillyTerrainDecorator } from './HillyTerrainDecorator'
import { MossyTerrain } from './MossyTerrain'

describe('FuelCost Decorator', () => {
  const vehicle = new Vehicle(7)
  it('Rides on grassy', () => {
    const grassyTerrain = new GrassyTerrain()
    expect(vehicle.getFuelCost(grassyTerrain)).toEqual(12)
  })

  it('Rides on hilly grassy terrain', () => {
    const hillyGrassyTerrain = new HillyTerrainDecorator(new GrassyTerrain())
    expect(vehicle.getFuelCost(hillyGrassyTerrain)).toEqual(22)
    expect(hillyGrassyTerrain.getDescription()).toEqual('HillyGrassy')
  })

  it('Rides on HillyGrassy terrain', () => {
    const hillyMossyGrassyTerrain = new HillyTerrainDecorator(
      new MossyTerrain(),
    )

    expect(vehicle.getFuelCost(hillyMossyGrassyTerrain)).toEqual(27)
    expect(hillyMossyGrassyTerrain.getDescription()).toEqual('HillyMossy')
  })
})
