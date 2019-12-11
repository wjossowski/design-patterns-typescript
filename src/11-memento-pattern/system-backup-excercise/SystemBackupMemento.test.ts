import { OperatingSystem, OperatingSystemCaretaker } from './operating-system'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('SystemBackup Memento', () => {
  it('throws for empty snapshot recovery', () => {
    const caretaker = new OperatingSystemCaretaker()
    expect(() => caretaker.getSnapshot()).toThrowError()
  })
  it('creates backup properly', async () => {
    const caretaker = new OperatingSystemCaretaker()
    const os = new OperatingSystem()

    os.createBackup()
    await wait(1000)
    os.createBackup()
    await wait(1000)

    caretaker.makeSnapshot(os.save())
    os.createBackup()
    await wait(1000)
    os.createBackup()
    await wait(1000)

    os.load(caretaker.getSnapshot())

    expect(os.log).toHaveLength(6)
  })
})
