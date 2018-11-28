import { Console } from './Console'
import { Logger, Message } from './Logger'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types'

@injectable()
export class LoggerImpl implements Logger {
  public constructor(@inject(TYPES.Console) private readonly console: Console) {
    this.console = console
  }

  public log(message: Message): void {
    this.console.log(message)
  }
}
