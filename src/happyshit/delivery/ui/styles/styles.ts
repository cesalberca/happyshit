import { Maybe } from '../../../../arch/utils/Maybe'

export const styles = (extraStyles: string[] | undefined) =>
  Maybe.fromValue(extraStyles as string[])
    .getOrElse([])
    .join(' ')
