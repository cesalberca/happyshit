export interface IHttp<T, U> {
  get: (url: string) => Promise<T>
  post: (url: string, payload: U) => Promise<Http.Response>
  put: (url: string, payload: U) => Promise<Http.Response>
}
