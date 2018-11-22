import { IConsole } from './IConsole'
import { ILogger, Message } from './ILogger'
import { inject, injectable } from 'inversify'
import { APPLICATION_SERVICE_ID } from '../../../happyshit/application/applicationServiceId'

@injectable()
export class Logger implements ILogger {
  public constructor(@inject(APPLICATION_SERVICE_ID.Console) private readonly console: IConsole) {
    this.console = console
  }

  public log(message: Message) {
    this.console.log(message)
  }
}
