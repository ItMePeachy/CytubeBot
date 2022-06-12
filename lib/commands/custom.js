/**
 * Various custom-type commands.
 */

// import {randomInt} from 'crypto';
import humanizeDuration from 'humanize-duration';
import parseDuration from 'parse-duration';
import random from 'random';

import {Rank} from '../constants.js';
import {getCurrentUnixTimestamp, sleep} from '../utils.js';

/** @typedef {import('./handle.js').Handler} Handler */

export const /** @type {!Map<string, Handler>} */ COMMANDS = new Map();

const COCK_MAX_LENGTH = 14;

COMMANDS.set('cock', (bot, username, msg) => {
  const target = msg.split(' ')[0] !== '' ? msg.split(' ')[0] : username;
  const length = Math.round(Math.random() * COCK_MAX_LENGTH);
  if (target === '!poof') {
    bot.sendChatMsg('forsenCD Nice try.');
    return;
  }

  let /** @type {string} */ emote;
  if (length > 10) {
    emote = 'gachiHYPER';
  } else if (length < 4) {
    emote = 'forsenLaughingAtYou';
  } else {
    emote = 'gachiGASM';
  }

  bot.sendChatMsg(`${target}'s cock is ${length} inches long ${emote}`);
});

COMMANDS.set('gn', (bot, username, msg) => {
  bot.sendChatMsg(`FeelsOkayMan <3 gn ${username}`);
});

/** Function that generates a random number based on a normal distribution. */
const normal = random.normal(/** mu= */ 100, /** sigma= */ 15);

COMMANDS.set('iq', (bot, username, msg) => {
  const target = msg.split(' ')[0] !== '' ? msg.split(' ')[0] : username;
  const iq = Math.round(normal());
  if (target === '!poof') {
    bot.sendChatMsg('forsenCD Nice try.');
    return;
  }

  if (target === 'IP0G') {
    bot.sendChatMsg(`IP0G's IQ is 187 6Head WineTime ahh yes`);
    return;
  }

  let /** @type {string} */ emote;
  if (iq > 115) {
    emote = ', ah yes 6Head';
  } else if (iq < 85) {
    emote = 'Pepege';
  } else {
    emote = ', average ForsenLookingAtYou';
  }

  bot.sendChatMsg(`${target}'s IQ is ${iq} ${emote}`);
});

COMMANDS.set('pyramid', async (bot, username, msg) => {
  if (!msg) {
    return;
  }

  if (!bot.pyramidLimiter.tryRemoveTokens(1)) {
    return bot.sendPm(username, '$pyramid is on cooldown');
  }

  // Send an invisible character first so all of the pyramid lines are aligned (second and
  // subsequent message in a row are left-aligned in chat)
  bot.sendChatMsg('⠀');

  const word = msg.split(' ')[0];
  bot.sendChatMsg(`⠀ ${word}`);
  bot.sendChatMsg(`⠀ ${word} ${word}`);
  bot.sendChatMsg(`⠀ ${word} ${word} ${word}`);
  bot.sendChatMsg(`⠀ ${word} ${word} ${word} ${word}`);
  bot.sendChatMsg(`⠀ ${word} ${word} ${word}`);
  bot.sendChatMsg(`⠀ ${word} ${word}`);
  bot.sendChatMsg(`⠀ ${word}`);
});

COMMANDS.set('py', async (bot, username, msg) => {
  if (!msg) {
    return;
  }
  const words = msg.split(' ');
  const amount = words[0];
  const emote = words[1];
  if (amount > 17 || amount < 0) {
    bot.sendChatMsg(`[red]$py:[/] Amount too large or less than 0.`);
    return;
  }
  if (!(await bot.checkPermission(username, Rank.MOD))) {
    if (amount < 5) {
      const pricePer = 1000;
      const price = pricePer * amount;
      const currentPoints = await bot.db.getUserPoints(username);
      if (currentPoints < price) {
        bot.sendPm(username, `You don't have enough points for this command(${price})`);
        return;
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    } else if ((amount > 4) && (amount < 8)) {
      const pricePer = 1500;
      const price = pricePer * amount;
      const currentPoints = await bot.db.getUserPoints(username);
      if (currentPoints < price) {
        bot.sendPm(username, `You don't have enough points for this command(${price})`);
        return;
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    } else if ((amount > 7) && (amount < 11)) {
      const pricePer = 3000;
      const price = pricePer * amount;
      const currentPoints = await bot.db.getUserPoints(username);
      if (currentPoints < price) {
        bot.sendPm(username, `You don't have enough points for this command(${price})`);
        return;
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    } else if ((amount > 10) && (amount < 14)) {
      const pricePer = 5000;
      const price = pricePer * amount;
      const currentPoints = await bot.db.getUserPoints(username);
      if (currentPoints < price) {
        bot.sendPm(username, `You don't have enough points for this command(${price})`);
        return;
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    } else if (amount > 13) {
      const pricePer = 7000;
      const price = pricePer * amount;
      const currentPoints = await bot.db.getUserPoints(username);
      if (currentPoints < price) {
        bot.sendPm(username, `You don't have enough points for this command(${price})`);
        return;
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    }
  }
  const text = [];
  bot.sendChatMsg('⠀');
  for (let count = 0; count < (amount * 2); count++) {
    await sleep(75);
    if (count < amount) {
      text.push(emote);
      bot.sendChatMsg(`⠀ ${text.join(' ')}`);
    } else {
      text.pop();
      bot.sendChatMsg(`⠀ ${text.join(' ')}`);
    }
  }
});

COMMANDS.set('tuck', (bot, username, msg) => {
  const target = msg.split(' ')[0];
  if (target === '') {
    bot.sendChatMsg(
        `${username}, who do you want to tuck in? FeelsOkayMan ` +
        'Example: $tuck MrDestructoidCyDJ');
  }

  bot.sendChatMsg(`Bedge ${username} tucks ${target} into bed.`);
});

COMMANDS.set('mc', (bot, username, msg) => {
  bot.sendChatMsg(
      `${username}, We have a community Minecraft Anarchy Server thats open` +
      ` to everyone. Info on the server and joining here: https://discord.gg/bZtYVSC8gY`);
});

COMMANDS.set('mcinfo', async (bot, username, msg) => {
  if (!(await bot.checkPermission(username, Rank.ADMIN))) {
    bot.sendChatMsg(`${username} does not have permission to enable mcinfo. FeelsWeirdMan`);
    return;
  }
  const words = msg.split(' ');
  let amount = words[1];
  const waitTime = parseDuration(words.slice(0).join(' '), /** format= */ 'sec');
  if (isNaN(waitTime) || waitTime < 0) {
    bot.sendChatMsg('Failed to parse interval time. Example $mcinfo 1h 24');
    return;
  }
  if (isNaN(amount) || amount < 0) {
    bot.sendChatMsg('Failed to parse amount. Example $mcinfo 30m 12');
    return;
  }
  const waitTimeMs = waitTime * 1000;
  const interval = humanizeDuration(waitTime * 1000);
  bot.sendChatMsg(`/me Now sending mcinfo ${amount} times, every ${interval}`);

  while (amount != 0) {
    bot.sendChatMsg(
        `We have a community Minecraft Anarchy Server thats open` +
        ` to everyone. Info on the server and joining here: https://discord.gg/bZtYVSC8gY`);
    await sleep(waitTimeMs);
    amount--;
  }
});

const H_TIER_SHIP = [
  'CatAHomie they go together like salt and pepper.',
  'klaiusGuraHug they should get married.',
  'dankHug a perfect match.',
  'elisLove a match made in heaven',
  'OnionFlushed',
];

const MH_TIER_SHIP = [
  'monkaHmm not a bad match.',
  'They have a decent chance, just bUrself',
  'OkayMan they make an okay match man.',
  'veiHugging they make a good match most of the time.',
  'muniSip what are you waiting for?',
];

const ML_TIER_SHIP = [
  'pepegaGamble its a bit of a gamble.',
  'They may not be the best together, but the drama would be fun to watch JuiceTime',
  'VeryPog',
  'DocLookingAtYourWife',
  'klaiusGuraLost that may be a lost cause.',
];

const L_TIER_SHIP = [
  'CaitlynS run.',
  'They go together like cereal and orange juice DansGame',
  'monkaS I\'ve seen into your future together, it doesn\'t look good..',
  'Awkward ...',
  'FeelsBadMan not a match.',
  'ElNoSabe el no sabe',
];

COMMANDS.set('ship', async (bot, username, msg) => {
  const words = msg.split(' ');
  const first = words[0];
  const second = words[1];
  if (first === '!poof') {
    bot.sendChatMsg('forsenCD Nice try.');
    return;
  }

  if (first === '') {
    bot.sendChatMsg('Invalid syntax. Examples: $ship iP0G spintto / $ship iP0G');
    return;
  }

  const sPercent = Math.floor(Math.random() * 101);
  const sPhrase = (() => {
    if (sPercent <= 25) {
      return L_TIER_SHIP[Math.floor(Math.random() * L_TIER_SHIP.length)];
    } else if ((sPercent > 25) && (sPercent <= 50)) {
      return ML_TIER_SHIP[Math.floor(Math.random() * ML_TIER_SHIP.length)];
    } else if ((sPercent > 50) && (sPercent <= 75)) {
      return MH_TIER_SHIP[Math.floor(Math.random() * MH_TIER_SHIP.length)];
    } else if (sPercent > 75) {
      return H_TIER_SHIP[Math.floor(Math.random() * H_TIER_SHIP.length)];
    }
  })();

  if (second != null) {
    bot.sendChatMsg(`${first} and ${second} have a ${sPercent}% compatibility. ${sPhrase}`);
  } else {
    bot.sendChatMsg(`${username} and ${first} have a ${sPercent}% compatibility. ${sPhrase}`);
  }
});

// const timersRead = CytubeBot.readTimerPhrases();
// const tEndsRead = await bot.readTimerEnds();
// const tStartsRead = await bot.readTimerStarts();
let timers = [];       // assoc file timers.txt
let timerEnds = [];    // assoc file tEnd.txt
let timerStarts = [];  // assoc file tStarts.txt
// timers = timers.concat(timersRead);
// timerEnds = timerEnds.concat(tEndsRead);
// timerStarts = timerStarts.concat(tStartsRead);

COMMANDS.set('timer', async (bot, username, msg) => {
  const words = msg.split(' ');
  const waitTime = parseDuration(words[0], /** format= */ 'sec');
  if (isNaN(waitTime) || waitTime < 0) {
    bot.sendChatMsg('Failed to parse time. Example: $timer 10m this is my timer message');
    return;
  }
  for (let w = 0; w < words.length; w++) {
    if (words[w].endsWith('do')) {
      for (let w = 0; w < words.length; w++) {
        if (words[w].startsWith('poof')) {
          bot.sendChatMsg(`Nice try forsenCD`);
          return;
        }
      }
    }
  }
  const message = words.slice(1).join(' ');
  if ((!message) || message === '') {
    bot.sendChatMsg(`${username}, you must have a phrase for your timer FeelsLateMan`);
    return;
  }
  const waitTimeMs = waitTime * 1000;
  const interval = humanizeDuration(waitTime * 1000);
  bot.sendChatMsg(`/me [blue]${username}[/] set a timer for ${interval}`);
  const end = getCurrentUnixTimestamp() + waitTime;
  timers.push(message);
  timerEnds.push(end);
  const tStart = getCurrentUnixTimestamp();
  timerStarts.push(tStart);

  bot.writeTimerPhrases(timers);
  bot.writeTimerEnds(timerEnds);
  bot.writeTimerStarts(timerStarts);

  await sleep(waitTimeMs);
  bot.sendChatMsg(`[red][TIMER: ${interval}][/]: ${message}`);
  const indexTmsg = timers.indexOf(message);
  timers.splice(indexTmsg, 1);
  const indexTend = timerEnds.indexOf(end);
  timerEnds.splice(indexTend, 1);
  const indexTstart = timerStarts.indexOf(tStart);
  timerStarts.splice(indexTstart, 1);
  bot.writeTimerPhrases(timers);
  bot.writeTimerEnds(timerEnds);
  bot.writeTimerStarts(timerStarts);
});

let timeWithMsg = [];
let timeLeft = [];
let firstAfterRestart = true;

function setFirstAfterR() {
  firstAfterRestart = false;
  return firstAfterRestart;
}
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

COMMANDS.set('timers', async (bot, username, msg) => {
  if (firstAfterRestart === true) {
    const timersRead = await bot.readTimerPhrases();
    const timerEndsRead = await bot.readTimerEnds();
    const timerStartsRead = await bot.readTimerStarts();
    const tRead = timersRead;
    if ((tRead.length === 0) && (timers.length === 0)) {
      bot.sendChatMsg(`There are currently no active timers.`);
      setFirstAfterR();
      return;
    } else if (tRead.length === 0) {
      setFirstAfterR();
    } else {
      timers = timers.concat(timersRead);
      timerEnds = timerEnds.concat(timerEndsRead);
      timerStarts = timerStarts.concat(timerStartsRead);
      timers = removeDuplicates(timers);
      timerEnds = removeDuplicates(timerEnds);
      timerStarts = removeDuplicates(timerStarts);
      setFirstAfterR();
    }
  }
  timeLeft = [];
  timeWithMsg = [];

  if (timers.length === 0) {
    bot.sendChatMsg(`There are currently no active timers.`);
    return;
  }
  for (let h = 0; h < timerEnds.length; h++) {
    const timerEnd = timerEnds[h] - getCurrentUnixTimestamp();
    const tmrEnd = humanizeDuration(timerEnd * 1000);
    timeLeft.push(tmrEnd);
  }
  for (let i = 0; i < timers.length; i++) {
    const percentDone =
        ((timerEnds[i] - getCurrentUnixTimestamp()) / (timerEnds[i] - timerStarts[i])) * 100;
    if (percentDone > 66) {
      timeWithMsg.push(`${i + 1}. ${timers[i]} [bw][green]${timeLeft[i]} left.[/][/]`);
    } else if ((percentDone <= 66) && percentDone > 33) {
      timeWithMsg.push(`${i + 1}. ${timers[i]} [bw][yellow]${timeLeft[i]} left.[/][/]`);
    } else {
      timeWithMsg.push(`${i + 1}. ${timers[i]} [bw][red]${timeLeft[i]} left.[/][/]`);
    }
  }
  bot.sendChatMsg(`Active timers:`);
  for (let m = 0; m < timeWithMsg.length; m++) {
    bot.sendChatMsg(`${timeWithMsg[m]}`);
  }
});
