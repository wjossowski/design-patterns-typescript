export class Singleton {
  private static instance?: Singleton

  private constructor(public id: string) {}

  public setId(id: string) {
    this.id = id
  }

  public getId() {
    return this.id
  }

  public static get() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton('singleton')
    }

    return Singleton.instance
  }
}

export class TurboEasySingleton {
  private static readonly instance: TurboEasySingleton = new TurboEasySingleton(
    'id',
  )

  private constructor(public id: string) {}

  public setId(id: string) {
    this.id = id
  }

  public getId() {
    return this.id
  }

  public static get() {
    return TurboEasySingleton.instance
  }
}
