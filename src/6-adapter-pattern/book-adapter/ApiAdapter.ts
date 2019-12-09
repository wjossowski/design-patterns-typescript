import { LibraryAPIInterface } from './LibraryAPIInterface'
import { LibraryAPIv2Interface } from './LibraryAPIv2Interface'
import { User } from './User'

export class APIAdapter implements LibraryAPIInterface {
  constructor(private readonly api: LibraryAPIv2Interface) {}

  isAvailable(title: string): boolean {
    return this.api.numberOfAvailableCopies(title) > 0
  }

  reserve(title: string, user: User): boolean {
    return this.api.reserve(
      title,
      user.firstName,
      user.lastName,
      user.dateOfBirth,
    )
  }

  dueDate(title: string, user: User): Date {
    return this.api.dueDate(
      title,
      user.firstName,
      user.lastName,
      user.dateOfBirth,
    )
  }
}
