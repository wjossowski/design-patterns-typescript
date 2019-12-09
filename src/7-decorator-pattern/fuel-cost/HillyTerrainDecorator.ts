import { TerrainDecorator } from './TerrainDecorator'
import { Terrain } from './Terrain'

export class HillyTerrainDecorator extends TerrainDecorator {
  constructor(terrain: Terrain) {
    super(terrain, 10, 'Hilly')
  }
}
