type Message = string | number
interface Loggable {
  log: (message: Message) => void
}

export class Logger implements Loggable {
  public constructor(private readonly console: Console) {
    this.console = console
  }

  public log(message: Message) {
    this.console.log(message)
  }
}
