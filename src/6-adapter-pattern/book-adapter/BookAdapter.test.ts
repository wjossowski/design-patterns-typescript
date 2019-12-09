import { LibraryAPIv2 } from './LibraryAPIv2'
import { APIAdapter } from './ApiAdapter'
import { BookConnector } from './BookConnector'

describe('Adapter pattern', () => {
  it('Adapts API v2 correctly', () => {
    const libraryAPIv2 = new LibraryAPIv2()
    const apiAdapter = new APIAdapter(libraryAPIv2)

    const bookConnector = new BookConnector(apiAdapter)
    const available = bookConnector.checkAvailability(
      'Harry Potter i Zakon Feniksa',
    )

    expect(available).toEqual(true)
  })
})
