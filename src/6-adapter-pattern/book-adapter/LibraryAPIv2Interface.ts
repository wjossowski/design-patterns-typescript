export interface LibraryAPIv2Interface {
  numberOfAvailableCopies(bookTitle: string): number
  reserve(
    bookTitle: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
  ): boolean
  dueDate(
    bookTitle: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
  ): Date
}
