export abstract class Meal {
  protected steps: string[] = []

  public prepareMeal() {
    this.steps.push('Przygotowuje danie')
  }

  public getSteps(): string[] {
    return this.steps
  }
}
