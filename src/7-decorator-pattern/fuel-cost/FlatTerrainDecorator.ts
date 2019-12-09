import { TerrainDecorator } from './TerrainDecorator'
import { Terrain } from './Terrain'

export class FlatTerrainDecorator extends TerrainDecorator {
  constructor(terrain: Terrain) {
    super(terrain, 0, 'Flat')
  }
}
