import { Reaction } from './Reaction.entity'
import { Id } from '../../../arch/domain/types/main.type'

export class UserReactions {
  private readonly _userReactions = new Map<Id, Reaction>()

  public addUserReaction(userId: Id, reaction: Reaction): void {
    this._userReactions.set(userId, reaction)
  }
}
