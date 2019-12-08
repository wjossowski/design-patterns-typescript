import { GameUnitFactory } from './GameUnitFactory'
import { RifflemanUnit } from './RiflemanUnit'
import { TankUnit } from './TankUnit'

describe('GameUnit DynamicFactory', () => {
  describe('Doesnt work for not registered types', () => {
    const factory = new GameUnitFactory()
    it('Creates Riffleman correctly', () => {
      expect(() => factory.createUnit('Rifleman')).toThrow()
    })

    it('Creates Tank correctly', () => {
      expect(() => factory.createUnit('Tank')).toThrow()
    })
  })
  describe('Works for registered types', () => {
    const factory = new GameUnitFactory()
    factory.registerType('Rifleman', {
      UnitConstructor: RifflemanUnit,
      data: {
        hp: 100,
        damage: 50,
        defense: 50,
      },
    })
    factory.registerType('Tank', {
      UnitConstructor: TankUnit,
      data: {
        hp: 200,
        damage: 500,
        defense: 500,
      },
    })

    it('Creates Riffleman correctly', () => {
      const riffleman = factory.createUnit('Rifleman')
      expect(riffleman instanceof RifflemanUnit).toBeTruthy()
      expect(riffleman.toJson()).toEqual({
        hp: 100,
        damage: 50,
        defense: 50,
      })
    })

    it('Creates Tank correctly', () => {
      const tank = factory.createUnit('Tank')
      expect(tank instanceof TankUnit).toBeTruthy()
      expect(tank.toJson()).toEqual({
        hp: 200,
        damage: 500,
        defense: 500,
      })
    })
  })
})
