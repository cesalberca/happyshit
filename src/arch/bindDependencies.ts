import { container } from './rootContainer'

export function bindDependencies(func: any, dependencies: any[]): any {
  const injections = dependencies.map(dependency => {
    return container.get(dependency)
  })
  return func.bind(func, ...injections)
}
