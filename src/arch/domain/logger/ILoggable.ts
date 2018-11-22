export type Message = string | number

export interface ILoggable {
  log: (message: Message) => void
}
