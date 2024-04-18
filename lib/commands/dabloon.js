/**
 * Dabloon commands.
 */

import {randomInt} from 'crypto';
import random from 'random';


import {DABLOON_CLAIM_COOLDOWN} from '../dabloon.js';
import {plural} from '../utils.js';
import {Rank} from '../constants.js';
//import {sleep, getCurrentUnixTimestamp} from '../utils.js';


/** @typedef {import('../cytubebot.js').CytubeBot} CytubeBot */
/** @typedef {import('./handle.js').Handler} Handler */

/**
 * See readme for chat commands.
 *
 * @type {!Map<string, Handler>}
 */
export const COMMANDS = new Map();

const MAX_DABLOONS_PER_CLAIM = 1;
const geometric = random.geometric(0.6);
const DABLOON_TYPES = [
  'Dabloons',

];

COMMANDS.set('dabloon', async (bot, username, msg) => {
  if (username === 'MrDestructoidCyDJ') {
    bot.sendChatMsg('PokiYou FU[/]CK YOU MRDESTRUCTOIDCYDJ');
    return;
  }
  {
    const userDabloon = await bot.dabloons.getUserDabloon(username);
    if (!userDabloon.canClaimDabloon()) {
      bot.sendChatMsg(
          `https://cdn.7tv.app/emote/637d09bbbd26f50d5ef4f13f/1x.webp [pink][b]Only 1 dabloon per hour. You can get your next daloon in ${userDabloon.nextDabloonAt.toRelative().replace('in ', '')}...`);
      return;
    }

  }
  const toClaim = Math.min(Math.round(geometric()), MAX_DABLOONS_PER_CLAIM);
  const userDabloon = await bot.dabloons.claimDabloon(username, toClaim);
  const claimedType = DABLOON_TYPES[randomInt(DABLOON_TYPES.length)];

  bot.sendChatMsg(
      `[b][pink]${username} has claimed their hourly dabloon${plural(toClaim)}[/][/] Coin ` +
      `[b][pink]and now has ${userDabloon.count} dabloon${plural(userDabloon.count)}! ` +
      `Next daloon in: ${DABLOON_CLAIM_COOLDOWN.toHuman()}.`);
});

COMMANDS.set('dabloons', async (bot, username, msg) => {
  const target = msg.split(' ')[0] !== '' ? msg.split(' ')[0] : username;
  if (target === '!poof' || target.startsWith('/')) {
    bot.sendChatMsg(`forsenCD Nice try.`);
    return;
  }
  let rank = 1;
  let dabloons = -1;

  let pageNumber = 0;
  const pageSize = 100; 
  pageLoop: while (true) {
    const page = await bot.db.getDabloonLeaderboardPage(pageNumber, pageSize);
    for (const user of page) {
      if (user.name === target) {
        dabloons = user.count;
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

if (dabloons === 4) {
bot.sendChatMsg(`[b][pink]${target} you have [/]https://cdn.discordapp.com/attachments/839616231853654016/975918692783259719/IMG_3795.png`);
return;
}
if (dabloons === 10) {
  bot.sendChatMsg(`[b][pink]${target} you have 10 dabloons!`);
  bot.sendChatMsg(`catHop you now have enough dabloons to timeout someone for 1 min with [b]@dbtimeout`);
  return;
  }

  bot.sendChatMsg(`[b][pink]${target} has ${dabloons} dabloon (rank ${rank})`);
});

COMMANDS.set('dabloonleaderboard', async (bot, username, msg) => {
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

  const page = await bot.db.getDabloonLeaderboardPage(pageNumber - 1, pageSize);
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

  deliver(`Dabloon leaderboard ${start}-${end}:`);

  for (const [i, user] of page.entries()) {
    const rank = i + firstRank;
    deliver(`#${rank} ${user.count} dabloons: ${user.name}`);
  }

  if (page.length === pageSize) {
    deliver(`For the next page, do @dabloonleaderboard ${pageNumber + 1}`);
  }
});



COMMANDS.set('givedabloon', async (bot, username, msg) => {
  const targetUser = msg.split(' ')[0];
  if (!targetUser) {
    return;
  }

  const allUsers = await bot.db.getAllUsers();
  if (!allUsers.includes(targetUser)) {
    bot.sendChatMsg(`User [b]${targetUser}[/] not found dogModCheck `);
    return;
  }

  const currenDabloons = await bot.db.getUserDabloonCount(username);
  if (currenDabloons === 0) {
    bot.sendChatMsg(`[b]${username}[/] you don't have any dabloons to give peachySad `);
    return;
  }

  if (msg.split(' ')[1] === undefined) {
    bot.sendChatMsg(
        'dabloon amount must be provided. ' +
        'Example: @givedabloon ItMePeachy 100');
    return;
  }
  const givingAmountMsg = msg.split(' ')[1].toLowerCase();
  const givingAmount = givingAmountMsg === 'all' ? currenDabloons : parseInt(givingAmountMsg, 10);
  if (isNaN(givingAmount)) {
    bot.sendChatMsg('Failed to parse dabloons amount. Example: @givedabloon ItMePeachy 100');
    return;
  }
  if (givingAmount > currenDabloons) {
    bot.sendChatMsg(
        `${username}: You can't give more dabloons than you have FeelsDankMan ` +
        `(you have [b]${currenDabloons}[/] dabloons)`);
    return;
  }
  if (givingAmount < 0) {
    bot.sendChatMsg(`Erm what do you think you're doing?`);
    return;
  }

  await bot.db.updateUserDabloon(username, -givingAmount);
  await bot.db.updateUserDabloon(targetUser, givingAmount);

  bot.sendChatMsg(`[b]${username}[/] gave [b]${givingAmount}[/] dabloons to [b]${targetUser}[/] peepoHappy `);
});







COMMANDS.set('adddabloons', async (bot, username, msg) => {
  if (username != 'ItMePeachy') {
    bot.sendChatMsg(`${username} does not have permission to adddabloons. WeirdCat2`);
    return;
  }

  const user = msg.split(' ')[0];
  if (!isNaN(parseInt(user, 10))) {
    bot.sendChatMsg(
        'Username must be provided for adddabloons. ' +
        'Example: @adddabloons ItMePeachy 5');
    return;
  }

  if (msg.split(' ')[1] === undefined) {
    bot.sendChatMsg(
        'Dabloons amount must be provided. ' +
        'Example: @adddabloons ItMePeachy 100');
    return;
  }
    
  const deltaMsg = msg.split(' ')[1].toLowerCase();
  const delta = deltaMsg === 'all' ? Number.MAX_VALUE : parseInt(deltaMsg, 10);

  await bot.db.updateUserDabloon(user, delta);

  const newDabloons = await bot.db.getUserDabloonCount(user);
  bot.sendChatMsg(`${user} now has ${newDabloons} dabloons`);
});




COMMANDS.set('removedabloons', async (bot, username, msg) => {
  if (!(await bot.checkPermission(username, Rank.MOD, null))) {
    bot.sendChatMsg(`${username} does not have permission to removedabloons. WeirdCat2`);
    return;
  }

  const user = msg.split(' ')[0];
  if (!isNaN(parseInt(user, 10))) {
    bot.sendChatMsg(
        'Username must be provided for removedabloons. Example: @removedabloons ItMePeachy 100');
    return;
  }

  if (msg.split(' ')[1] === undefined) {
    bot.sendChatMsg('dabloons amount must be provided. Example: @removedabloons ItMePeachy 100');
    return;
  }

  const deltaMsg = msg.split(' ')[1].toLowerCase();
  const delta = deltaMsg === 'all' ? Number.MAX_VALUE : parseInt(deltaMsg, 10);

  await bot.db.updateUserDabloon(user, -delta);

  const newDabloons = await bot.db.getUserDabloonCount(user);
  bot.sendChatMsg(`${user} now has ${newDabloons} dabloons`);
});



// try to make the /mute actually does @timeout so it wont break if it crahes while someone is muted


let IsTBTimeout = false; 
  
COMMANDS.set('dbtimeout', async (bot, username, msg) => {
  const price = 10;
  const currenDabloons = await bot.db.getUserDabloonCount(username);
  const target = msg.split(' ')[0] !== '' ? msg.split(' ')[0] : username;
  const DumbBot = 'MrDestructoidCyDJ'
  if (target === '') {
    bot.sendChatMsg(`Tomfoolery [pink]who would you like to timeout?`);
    return;
  }
  if (IsTBTimeout === true) {
    bot.sendChatMsg(`Robert Someone is already being timed out, please be patient.`);
    return;
  }
  if (!bot.userlist.map((user) => user.name).includes(target)) {
    bot.sendChatMsg(`peachySad [b]${target}[/] is not in chat.`);
    return;
  } 
  if (currenDabloons < price) {
    bot.sendChatMsg(`Poor ${username} you don't have enough dabloons for this command. [b](${price} dabloons)`);
    return;
  }
if (!bot.userlist.map((user) => user.name).includes('MrDestructoidCyDJ')) {
  if ((await bot.db.getUserRank(target)) >= Rank.MOD) {
    bot.sendChatMsg(`peepoSadDankSip I'm sorry, you can't time out mods.`);
    return;
  }
  await bot.db.updateUserDabloon(username, -price);
  bot.sendChatMsg(`/mute ${target}`, true);
  const end = getCurrentUnixTimestamp(6000);
  await bot.db.setUserTimeout(target, end);


  IsTBTimeout = true 
  bot.sendChatMsg(`muniBusiness [pink][b]${username}[/] muted [b]${target}[/] for 1 minute. It was a pleasure doing business with you.`);
  await sleep(60000);
  bot.sendChatMsg(`/unmute ${target}`);
  IsTBTimeout = false
} else {
  if ((await bot.db.getUserRank(target)) >= Rank.ADMIN) {
    bot.sendChatMsg(`peepoSadDankSip I'm sorry but you can't time out ${target} since they are an admin.`);
    return;
  } else {
  await bot.db.updateUserDabloon(username, -price);
  bot.sendChatMsg(`$timeout ${target} 1m`);
  await sleep(100);
  bot.sendChatMsg(`muniBusiness [pink][b]${username}[/] muted [b]${target}[/] for 1 minute. It was a pleasure doing business with you.`);
  }
}
}); 





COMMANDS.set('dbskip', async (bot, username, msg) => {
  const price = 5;
  const currenDabloons = await bot.db.getUserDabloonCount(username);
  if (currenDabloons < price) {
    bot.sendChatMsg(`Poor ${username} you don't have enough dabloons for this command. [b](${price} dabloons)`);
    return;
  } else {
    await bot.db.updateUserDabloon(username, -price);
  }
  bot.deleteVideo(bot.currentUID);
  bot.sendChatMsg(`muniBusiness [pink][b]${username}[/] skipped the current video for [b]5 dabloons[/]. It was a pleasure doing business with you.`);
}); 

COMMANDS.set('dbleader', async (bot, username, msg) => {
  const price = 15;
  const currenDabloons = await bot.db.getUserDabloonCount(username);
  if (currenDabloons < price) {
    bot.sendChatMsg(`Poor ${username} you don't have enough dabloons for this command. [b](${price} dabloons)`);
    return;
  } else {
    await bot.db.updateUserDabloon(username, -price);
  }
  bot.sendAssignLeader(`${username}`)
  bot.sendChatMsg(`muniBusiness [pink][b]${username}[/] gave you leader for [b]${price} dabloons[/]. It was a pleasure doing business with you.`);
}); 



//a list of all the commands you can use with dabloons and their price please update it with new commands.
COMMANDS.set(`prices`, async (bot, username, msg) => {
  bot.sendChatMsg(`[b][pink]Commands:`);
  bot.sendChatMsg(`[pink]@dbtimeout[/] [b](10 dabloons)[/] Mutes user of your choice for 1 minute.`);
  bot.sendChatMsg(`[pink]@dbskip[/] [b](5 dabloons)[/] Skips video that is currently being played.`);
  bot.sendChatMsg(`[pink]@dbleader[/] [b](15 dabloons)[/] Gives you leader. (allows you to control media player)`);
})


