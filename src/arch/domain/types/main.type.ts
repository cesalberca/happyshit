export type Id = number
export type CallbackFunction<T = unknown> = (...params: Array<unknown>) => T
// tslint:disable-next-line
export interface Empty {}
export interface Map<T> {
  [key: string]: T
}
