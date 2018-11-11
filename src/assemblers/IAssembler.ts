export interface IAssembler<T, U> {
  assemble: (original: T) => U
  assembleAll: (originals: T[]) => U[]
}
