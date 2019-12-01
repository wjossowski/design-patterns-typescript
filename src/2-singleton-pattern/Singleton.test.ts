import { Singleton, TurboEasySingleton } from './Singleton'

describe('Singleton test suite', () => {
  it('Has the same reference', () => {
    const singleton = Singleton.get()
    const singleton2 = Singleton.get()

    expect(singleton).toEqual(singleton2)
  })

  it('Updates the same fields', () => {
    const singleton = Singleton.get()
    singleton.setId('test')

    const singleton2 = Singleton.get()

    expect(singleton2.getId()).toEqual('test')
  })

  it('TurboEasySingleton', () => {
    const singleton1 = TurboEasySingleton.get()
    const singleton2 = TurboEasySingleton.get()

    expect(singleton1).toEqual(singleton2)
  })

  it('TurboEasySingleton updates the same fields', () => {
    const singleton = TurboEasySingleton.get()
    singleton.setId('test')

    const singleton2 = TurboEasySingleton.get()

    expect(singleton2.getId()).toEqual('test')
  })
})
