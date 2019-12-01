interface Greetable {
  greet(): string
}

class Entity implements Greetable {
  constructor(private readonly name: string) {}

  public greet() {
    return `Hello, my name is ${this.name}`
  }
}

class AutroEntity extends Entity {
  public readonly tag: string = 'autro'
}

export class EntityFactory {
  public static create(name: string) {
    return new AutroEntity(name)
  }
}

export class Greeter {
  private readonly greeters: Greetable[] = []
  public addToGreetables(greeter: Greetable) {
    this.greeters.push(greeter)
  }
  public greetAll() {
    return this.greeters.map((greeter) => greeter.greet())
  }
}
