import { EntityFactory, Greeter } from './Greeting'
describe('test', () => {
  it('Greets all AutroDudes', () => {
    const greeter = new Greeter()
    greeter.addToGreetables(EntityFactory.create('Martin'))
    greeter.addToGreetables(EntityFactory.create('Stig'))
    greeter.addToGreetables(EntityFactory.create('Andrii'))

    const greeters = greeter.greetAll()
    expect(greeters).toEqual([
      'Hello, my name is Martin',
      'Hello, my name is Stig',
      'Hello, my name is Andrii',
    ])
  })
})
