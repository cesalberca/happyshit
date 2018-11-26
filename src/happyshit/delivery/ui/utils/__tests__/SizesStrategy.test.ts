import { IStrategy, SizesStrategy } from '../SizesStrategy'
import { ESizes } from '../../constants/ESizes'

describe('SizesStrategy', () => {
  let sizesStrategy: SizesStrategy

  beforeEach(() => {
    sizesStrategy = new SizesStrategy()
  })

  it('should have a default strategy', () => {
    expect(sizesStrategy.getStrategyFor(ESizes.SMALL)).toBe('1rem')
  })

  it('should register a strategy', () => {
    const strategy: IStrategy<ESizes, string> = {
      execute: () => 'foo',
      check: predicate => predicate === ESizes.BIG,
    }
    sizesStrategy.addStrategy(strategy)
    expect(sizesStrategy.getStrategyFor(ESizes.BIG)).toBe('foo')
  })

  it('should register several strategies', () => {
    const strategyA: IStrategy<ESizes, string> = {
      execute: () => 'foo',
      check: predicate => predicate === ESizes.BIG,
    }

    const strategyB: IStrategy<ESizes, string> = {
      execute: () => 'bar',
      check: predicate => predicate === ESizes.MEDIUM,
    }

    sizesStrategy.addStrategy(strategyA)
    sizesStrategy.addStrategy(strategyB)

    expect(sizesStrategy.getStrategyFor(ESizes.MEDIUM)).toBe('bar')
  })

  it('should clear strategies', () => {
    const strategyA: IStrategy<ESizes, string> = {
      execute: () => 'foo',
      check: predicate => predicate === ESizes.BIG,
    }

    const strategyB: IStrategy<ESizes, string> = {
      execute: () => 'bar',
      check: predicate => predicate === ESizes.MEDIUM,
    }

    sizesStrategy.addStrategy(strategyA)
    sizesStrategy.addStrategy(strategyB)
    sizesStrategy.clearStrategies()

    expect(sizesStrategy.getStrategyFor(ESizes.BIG)).toBe('1rem')
  })
})
