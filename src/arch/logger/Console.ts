import { Message } from './Logger'

export interface Console {
  log: (message: Message) => void
}
