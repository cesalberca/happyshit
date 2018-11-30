import { Maybe } from './Maybe'
import { Strategy } from './Strategy'

export abstract class GenericStrategy<T, S> {
  private strategies: Array<Strategy<T, S>> = []

  public abstract getDefaultStrategy(): Strategy<T, S>

  public getStrategyFor(value: T): Strategy<T, S> {
    const foundStrategy = Maybe.fromValue(
      this.strategies.find(candidateStrategy => candidateStrategy.check(value))
    ) as Maybe<Strategy<T, S>>
    const strategy = foundStrategy.getOrElse(this.getDefaultStrategy())
    return strategy
  }

  public getValue(value: T): S {
    return this.getStrategyFor(value).execute()
  }

  public addStrategy(strategy: Strategy<T, S>): void {
    this.strategies.push(strategy)
  }

  public clearStrategies(): void {
    this.strategies = []
  }
}
