/**
 * Cookie commands.
 */

import {randomInt} from 'crypto';
import random from 'random';

import {COOKIE_CLAIM_COOLDOWN} from '../cookie.js';
import {plural} from '../utils.js';

/** @typedef {import('../cytubebot.js').CytubeBot} CytubeBot */
/** @typedef {import('./handle.js').Handler} Handler */

/**
 * See readme for chat commands.
 *
 * @type {!Map<string, Handler>}
 */
export const COMMANDS = new Map();

const MAX_COOKIES_PER_CLAIM = 5;
const geometric = random.geometric(0.6);
const COOKIE_TYPES = [
  'chocolate chip',
  'peanut butter',
  'oatmeal raisin',
  'shortbread',
  'gingerbread',
  'sugar',
  'snickerdoodle',
  'white chocolate macadamia nut',
  'ginger snap',
  'butter pecan',
];

COMMANDS.set('cookie', async (bot, username, msg) => {
  if (username === 'MrDestroidCyDJ') {
    bot.sendChatMsg('PokiYou FU[/]CK YOU MRDESTRUCTOIDCYDJ');
    return;
  }
  {
    const userCookie = await bot.cookies.getUserCookie(username);
    if (!userCookie.canClaimCookie()) {
      bot.sendChatMsg(
          `Can't claim yet, wait ${userCookie.nextCookieAt.toRelative().replace('in ', '')}...`);
      return;
    }
  }
  const toClaim = Math.min(Math.round(geometric()), MAX_COOKIES_PER_CLAIM);
  const userCookie = await bot.cookies.claimCookie(username, toClaim);
  const claimedType = COOKIE_TYPES[randomInt(COOKIE_TYPES.length)];

  bot.sendChatMsg(
      `${username} claimed ${toClaim} ${claimedType} cookie${plural(toClaim)}, ` +
      `now has ${userCookie.count} cookie${plural(userCookie.count)}! ` +
      `Cooldown: ${COOKIE_CLAIM_COOLDOWN.toHuman()}...`);
});

COMMANDS.set('cookies', async (bot, username, msg) => {
  const target = msg.split(' ')[0] !== '' ? msg.split(' ')[0] : username;
  if (target === '!poof' || target.startsWith('/')) {
    bot.sendChatMsg(`forsenCD Nice try.`);
    return;
  }
  let rank = 1;
  let cookies = -1;

  let pageNumber = 0;
  const pageSize = 100;
  pageLoop: while (true) {
    const page = await bot.db.getCookieLeaderboardPage(pageNumber, pageSize);
    for (const user of page) {
      if (user.name === target) {
        cookies = user.count;
        break pageLoop;
      }
      rank++;
    }

    if (page.length < pageSize) {
      bot.sendChatMsg(`Couldn't find ${target}'s rank`);
      return;
    }

    pageNumber++;
  }

  bot.sendChatMsg(`${target} has ${cookies} cookies (rank ${rank})`);
});

COMMANDS.set('cookieleaderboard', async (bot, username, msg) => {
  const pageSize = 5;
  const pageMsg = msg.split(' ')[0];
  const pageMsgParsed = pageMsg !== '' ? parseInt(pageMsg, 10) : 1;
  const pageNumber = !isNaN(pageMsgParsed) ? pageMsgParsed : 1;
  const firstRank = ((pageNumber - 1) * pageSize) + 1;
  if (pageNumber > 10000) {
    bot.sendChatMsg(`Nice try forsenCD`);
    return;
  }
  if (pageNumber < 0) {
    bot.sendChatMsg(`The page number needs to be a positive number Pepega Clap`);
    return;
  }

  const page = await bot.db.getCookieLeaderboardPage(pageNumber - 1, pageSize);
  const start = firstRank;
  const end = firstRank + page.length - 1;

  const pmIfUserCountGreaterThan = 50;

  const deliver = bot.userlist.length > pmIfUserCountGreaterThan ?
      (msg) => bot.sendPm(username, msg) :
      (msg) => bot.sendChatMsg(msg);

  if (bot.userlist.length > pmIfUserCountGreaterThan) {
    if (bot.leaderboardLargeChatLimiter.tryRemoveTokens(1)) {
      bot.sendChatMsg(`PMing leaderboard due to high # of users in chat`);
    }
  }

  deliver(`Cookie leaderboard ${start}-${end}:`);

  for (const [i, user] of page.entries()) {
    const rank = i + firstRank;
    deliver(`#${rank} ${user.count} cookies: ${user.name}`);
  }

  if (page.length === pageSize) {
    deliver(`For the next page, do @cookieleaderboard ${pageNumber + 1}`);
  }
});

COMMANDS.set('givecookie', async (bot, username, msg) => {
  const targetUser = msg.split(' ')[0];
  if (!targetUser) {
    return;
  }

  const allUsers = await bot.db.getAllUsers();
  if (!allUsers.includes(targetUser)) {
    bot.sendChatMsg(`User [b]${targetUser}[/] not found dogModCheck `);
    return;
  }

  const currenCookies = await bot.db.getUserCookieCount(username);
  if (currenCookies === 0) {
    bot.sendChatMsg(`[b]${username}[/] you don't have any cookies to give peachySad `);
    return;
  }

  if (msg.split(' ')[1] === undefined) {
    bot.sendChatMsg(
        'cookie amount must be provided. ' +
        'Example: @givecookie ItMePeachy 100');
    return;
  }
  const givingAmountMsg = msg.split(' ')[1].toLowerCase();
  const givingAmount = givingAmountMsg === 'all' ? currenCookies : parseInt(givingAmountMsg, 10);
  if (isNaN(givingAmount)) {
    bot.sendChatMsg('Failed to parse cookies amount. Example: @givecookie ItMePeachy 100');
    return;
  }
  if (givingAmount > currenCookies) {
    bot.sendChatMsg(
        `${username}: You can't give more cookies than you have FeelsDankMan ` +
        `(you have [b]${currenCookies}[/] cookies)`);
    return;
  }
  if (givingAmount < 0) {
    bot.sendChatMsg(`Erm what do you think you're doing?`);
    return;
  }

  await bot.db.updateUserCookie(username, -givingAmount);
  await bot.db.updateUserCookie(targetUser, givingAmount);

  bot.sendChatMsg(`[b]${username}[/] gave [b]${givingAmount}[/] cookies to [b]${targetUser}[/] peepoHappy `);
});
