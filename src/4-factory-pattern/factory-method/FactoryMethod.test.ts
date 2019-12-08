import { GameUnitFactory } from './GameUnitFactory'
import { RifflemanUnit } from './RiflemanUnit'
import { TankUnit } from './TankUnit'

describe('GameUnit Factory Method', () => {
  const factory = new GameUnitFactory()
  it('Creates Riffleman correctly', () => {
    const riffleman = factory.createUnit('Rifleman')
    expect(riffleman instanceof RifflemanUnit).toBeTruthy()
    expect(riffleman).toEqual({
      hp: 100,
      damage: 50,
      defense: 50,
    })
  })

  it('Creates Tank correctly', () => {
    const tank = factory.createUnit('Tank')
    expect(tank instanceof TankUnit).toBeTruthy()
    expect(tank).toEqual({
      hp: 200,
      damage: 500,
      defense: 500,
    })
  })
})
