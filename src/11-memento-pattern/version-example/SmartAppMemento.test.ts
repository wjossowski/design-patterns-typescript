import { SmartApp, SmartAppCaretaker } from './smart-app'
describe('SmartApp Memento', () => {
  it('Presents the same loading behavior', () => {
    const smartAppCaretaker = new SmartAppCaretaker()
    const smartApp = new SmartApp()

    smartApp.changeVersion('1.0')
    smartApp.changeVersion('1.1')
    smartApp.changeVersion('1.2')

    smartAppCaretaker.addMemento(smartApp.save())

    smartApp.changeVersion('1.3')
    smartApp.changeVersion('2.0')
    smartApp.changeVersion('2.1')

    smartApp.load(smartAppCaretaker.getMemento(0))

    expect(smartApp.actions).toEqual([
      'Setting new version 1.0',
      'Setting new version 1.1',
      'Setting new version 1.2',
      'Backup version 1.2',
      'Setting new version 1.3',
      'Setting new version 2.0',
      'Setting new version 2.1',
      'Loading version 1.2 at 2.1',
    ])
  })
})
