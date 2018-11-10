type Message = string | number
export const log = (logger: Console = console) => (message: Message) => {
  logger.log(message)
}
