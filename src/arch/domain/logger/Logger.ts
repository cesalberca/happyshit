import { ILoggable, Message } from './ILoggable'

export class Logger implements ILoggable {
  public constructor(private readonly console: Console) {
    this.console = console
  }

  public log(message: Message) {
    this.console.log(message)
  }
}
