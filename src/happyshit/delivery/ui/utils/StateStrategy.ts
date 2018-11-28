import { Maybe } from '../../../../arch/Maybe'
import { injectable } from 'inversify'
import { State } from '../../../../arch/delivery/states/State'

export interface IStrategy<T = {}, U = {}> {
  check: (predicate: T) => boolean
  execute: () => U
}

type TStateStrategy = IStrategy<State, string>

@injectable()
export class StateStrategy {
  private strategies: TStateStrategy[] = []

  public getDefaultStrategy(): TStateStrategy {
    return {
      check(): boolean {
        return true
      },
      execute: () => '',
    }
  }

  public getStrategyFor(state: State): string {
    const foundStrategy = Maybe.fromValue(this.strategies.find(candidateStrategy => candidateStrategy.check(state)))
    const strategy = foundStrategy.getOrElse(this.getDefaultStrategy()) as TStateStrategy
    return strategy.execute()
  }

  public addStrategy(strategy: TStateStrategy): void {
    this.strategies.push(strategy)
  }

  public clearStrategies(): void {
    this.strategies = []
  }
}
