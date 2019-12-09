import { AutomaticGearboxSequence } from './AutomaticGearboxSequence'
import { ButtonStartSequence } from './ButtonStartSequence'
import { ClassicCarStarting } from './ClassicCarStarting'

describe('CarStarting TemplateMethod', () => {
  it('Runs classic car starting', () => {
    const classic = new ClassicCarStarting()
    classic.startTheCar()
    expect(classic.getSteps()).toEqual([
      'fasting seatbelts',
      'moving keys',
      'setting the gear',
      'go',
    ])
  })
  it('Runs automatic car starting', () => {
    const classic = new AutomaticGearboxSequence()
    classic.startTheCar()
    expect(classic.getSteps()).toEqual([
      'fasting seatbelts',
      'starting ignition',
      'go',
    ])
  })
  it('Runs button car starting', () => {
    const classic = new ButtonStartSequence()
    classic.startTheCar()
    expect(classic.getSteps()).toEqual([
      'fasting seatbelts',
      'pushing button',
      'setting the gear',
      'go',
    ])
  })
})
