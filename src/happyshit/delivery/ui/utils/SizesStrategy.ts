import { ESizes } from '../constants/ESizes'
import { Maybe } from '../../../../arch/Maybe'

export interface IStrategy<T = {}, U = {}> {
  check: (predicate: T) => boolean
  execute: () => U
}

type TSizeStrategy = IStrategy<ESizes, string>

export class SizesStrategy {
  private strategies: TSizeStrategy[] = []

  public getDefaultStrategy(): TSizeStrategy {
    return {
      check(predicate: ESizes) {
        return typeof predicate === 'string'
      },
      execute: () => '1rem',
    }
  }

  public getStrategyFor(size: ESizes): string {
    const foundStrategy = Maybe.fromValue(this.strategies.find(candidateStrategy => candidateStrategy.check(size)))
    const strategy = foundStrategy.getOrElse(this.getDefaultStrategy()) as TSizeStrategy
    return strategy.execute()
  }

  public addStrategy(strategy: TSizeStrategy) {
    this.strategies.push(strategy)
  }

  public clearStrategies(): void {
    this.strategies = []
  }
}
