import { BlueUnitFactory } from './BlueUnitFactory'
import { RedUnitFactory } from './RedUnitFactory'
import { RifflemanUnit } from './RiflemanUnit'
import { TankUnit } from './TankUnit'

describe('GameUnit Factory Method', () => {
  const redFactory = new RedUnitFactory()
  const blueFactory = new BlueUnitFactory()
  it('Creates Riffleman correctly', () => {
    const riffleman = blueFactory.createInfantryUnit('Rifleman')
    expect(riffleman instanceof RifflemanUnit).toBeTruthy()
    expect(riffleman).toEqual({
      hp: 100,
      damage: 10,
      defense: 30,
      color: 'blue',
    })
  })

  it('Creates Tank correctly', () => {
    const tank = redFactory.createMechanizedUnit('Tank')
    expect(tank instanceof TankUnit).toBeTruthy()
    expect(tank).toEqual({
      hp: 496,
      damage: 55,
      defense: 152,
      color: 'red',
    })
  })
})
