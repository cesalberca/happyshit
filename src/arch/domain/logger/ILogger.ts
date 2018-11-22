export type Message = string | number

export interface ILogger {
  log: (message: Message) => void
}
