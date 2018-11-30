import { injectable } from 'inversify'
import { State } from '../../../../arch/delivery/states/State'
import { GenericStrategy } from '../../../../arch/utils/GenericStrategy'
import { Strategy } from '../../../../arch/utils/Strategy'

type TStateStrategy = Strategy<State, string>

@injectable()
export class StateStrategy extends GenericStrategy<State, string> {
  public getDefaultStrategy(): TStateStrategy {
    return {
      check(): boolean {
        return true
      },
      execute: () => '',
    }
  }
}
