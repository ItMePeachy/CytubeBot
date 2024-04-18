import {DateTime, Duration} from 'luxon';

export const DABLOON_CLAIM_COOLDOWN = Duration.fromObject({hours: 1}).normalize();

/** Handles dabloon claiming. */
export class Dabloons {
  /**
   * @param {!Database} database Reference to the database.
   */
  constructor(database) {
    /** @type {!import('./database.js').Database} */
    this.db = database;
  }

  /**
   * Claim n dabloons for a user.
   *
   * @param {string} user Username of the user to claim the dabloon for.
   * @param {number} n Number of dabloons to claim.
   * @return {!Promise<UserDabloon>} The user's new dabloon info.
   */
  async claimDabloon(user, n) {
    await this.db.updateUserDabloon(user, n);
    return this.getUserDabloon(user);
  }

  /**
   * Get the UserDabloon for a user.
   *
   * @param {string} user Username of the user to get the UserDabloon for.
   * @return {!Promise<UserDabloon>} The user's UserDabloon.
   */
  async getUserDabloon(user) {
    const count = await this.db.getUserDabloonCount(user);
    const expireTimestamp = await this.db.getUserDabloonLastClaimTimestamp(user);
    const expireTime = DateTime.fromSeconds(expireTimestamp || 0);
    return new UserDabloon(user, count, expireTime.plus(DABLOON_CLAIM_COOLDOWN));
  }
}

/** A single user's dabloon info. */
class UserDabloon {
  /**
   * @param {string} user The user in question.
   * @param {number} count Number of dabloons the user has.
   * @param {!DateTime} nextDabloonAt When the next dabloon can be claimed at.
   */
  constructor(user, count, nextDabloonAt) {
    this.user = user;
    this.count = count;
    this.nextDabloonAt = nextDabloonAt;
  }

  /**
   * Whether a user can currently claim a dabloon.
   *
   * @return {boolean} Whether a user can currently claim a dabloon.
   */
  canClaimDabloon() {
    return DateTime.now() >= this.nextDabloonAt;
  }
}
