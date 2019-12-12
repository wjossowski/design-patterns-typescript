import { Chef } from './Chef'
import { HardBoiledEggCooker } from './HardBoiledEggCooker'
import { SoftBoiledEggCooker } from './SoftBoiledEggCooker'

describe('EggCooker Strategy', () => {
  it('Doesnt work for empty strategy', () => {
    const chef = new Chef('Magda Gessler')
    expect(() => chef.cook()).toThrowError()
  })

  it('Allows to cook Hard boiled eggs', () => {
    const chef = new Chef('Magda Gessler')
    chef.setEggCooker(new HardBoiledEggCooker())
    chef.cook()
    expect(chef.log).toEqual(['Magda Gessler gotuje jajka na twardo'])
  })

  it('Allows to cook Soft boiled eggs', () => {
    const chef = new Chef('Magda Gessler')
    chef.setEggCooker(new SoftBoiledEggCooker())
    chef.cook()
    expect(chef.log).toEqual(['Magda Gessler gotuje jajka na miekko'])
  })

  it('Enables to switch strategy dynamically', () => {
    const chef = new Chef('Magda Gessler')

    chef.setEggCooker(new SoftBoiledEggCooker())
    chef.cook()
    chef.setEggCooker(new HardBoiledEggCooker())
    chef.cook()
    chef.setEggCooker(new SoftBoiledEggCooker())
    chef.cook()

    expect(chef.log).toEqual([
      'Magda Gessler gotuje jajka na miekko',
      'Magda Gessler gotuje jajka na twardo',
      'Magda Gessler gotuje jajka na miekko',
    ])
  })
})
