import { LibraryAPIInterface } from './LibraryAPIInterface'
import { User } from './User'

export class LibraryAPI implements LibraryAPIInterface {
  isAvailable(_title: string): boolean {
    return true
  }

  reserve(_title: string, _user: User): boolean {
    return true
  }

  dueDate(_title: string, _user: User): Date {
    return new Date()
  }
}
