import { LibraryAPIv2Interface } from './LibraryAPIv2Interface'

export class LibraryAPIv2 implements LibraryAPIv2Interface {
  numberOfAvailableCopies(_bookTitle: string): number {
    return 3
  }

  reserve(
    _bookTitle: string,
    _firstName: string,
    _lastName: string,
    _dateOfBirth: Date,
  ): boolean {
    return true
  }

  dueDate(
    _bookTitle: string,
    _firstName: string,
    _lastName: string,
    _dateOfBirth: Date,
  ): Date {
    return new Date()
  }
}
