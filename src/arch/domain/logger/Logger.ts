import { IConsole } from './IConsole'
import { ILogger, Message } from './ILogger'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../happyshit/types'

@injectable()
export class Logger implements ILogger {
  public constructor(@inject(TYPES.Console) private readonly console: IConsole) {
    this.console = console
  }

  public log(message: Message) {
    this.console.log(message)
  }
}
