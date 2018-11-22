export interface IConnector {
  connect: (input: RequestInfo, init?: RequestInit) => Promise<Response>
}
