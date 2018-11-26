export type Message = string | number

export interface Logger {
  log: (message: Message) => void
}
