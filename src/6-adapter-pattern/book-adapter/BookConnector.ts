import { User } from './User'
import { LibraryAPIInterface } from './LibraryAPIInterface'

export class BookConnector {
  constructor(private readonly libraryAPI: LibraryAPIInterface) {}

  public checkAvailability(title: string) {
    return this.libraryAPI.isAvailable(title)
  }

  public reserve(title: string, user: User) {
    return this.libraryAPI.reserve(title, user)
  }

  public whenToReturn(title: string, user: User) {
    return this.libraryAPI.dueDate(title, user)
  }
}
