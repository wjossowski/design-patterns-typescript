export class User {
  public readonly dateOfBirth: Date = new Date()
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly pesel: string,
  ) {}

  public getPesel(): string {
    return this.pesel
  }
}
