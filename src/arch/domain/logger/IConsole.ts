import { Message } from './ILogger'

export interface IConsole {
  log: (message: Message) => void
}
