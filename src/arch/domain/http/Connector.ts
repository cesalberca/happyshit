export interface Connector {
  connect: (input: RequestInfo, init?: RequestInit) => Promise<Response>
}
