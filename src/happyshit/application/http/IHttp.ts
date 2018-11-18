export interface IHttp<T, U> {
  get: (url: string, id?: Http.Id) => Promise<T>
  post: (url: string, payload: U) => Promise<Http.Response>
  put: (url: string, id: Http.Id, payload: U) => Promise<Http.Response>
}
