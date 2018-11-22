export interface Singleton<T> {
  instance: T
}

export function singleton<T extends { new (...args: any[]): {} }>(Class: T): T & Singleton<T> {
  return class extends Class {
    public static get instance() {
      if (!this._instance) {
        this._instance = new this() as T
        return this._instance
      }
      return this._instance
    }

    private static _instance: T

    private constructor(...args: any[]) {
      super(...args)
    }
  }
}
