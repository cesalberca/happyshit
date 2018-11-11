export interface Singleton<T> {
  getInstance: () => T
}

export function singleton<T extends { new (...args: any[]): {} }>(
  Class: T
): T & { getInstance: () => T } {
  return class extends Class {
    public static getInstance() {
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
