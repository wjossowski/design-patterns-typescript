import { User } from './User'

export interface LibraryAPIInterface {
  isAvailable(title: string): boolean
  reserve(title: string, user: User): boolean
  dueDate(title: string, user: User): Date
}
