import { MyDay } from './MyDay'
import { UnemployedDay } from './UnemployedDay'
import { TypeOfTransport } from './TypeOfTransport'

describe('Workday TemplateMethod', () => {
  it('Intantiates MyDay', () => {
    const myDay = new MyDay()
    myDay.everyDayIsExactlyTheSame(TypeOfTransport.BIKE)
    expect(myDay.getRecords()).toEqual([
      'waking-up',
      'getting-ready',
      'commute-time-took-25-minutes',
      'work-work',
      'go-home',
    ])
  })

  it('Instantiates UnemployedDay', () => {
    const unemployedDay = new UnemployedDay()
    unemployedDay.everyDayIsExactlyTheSame(TypeOfTransport.BIKE)
    expect(unemployedDay.getRecords()).toEqual([
      'waking-up',
      'getting-ready',
      'commute-time-took-0-minutes',
      'go-home',
    ])
  })
})
