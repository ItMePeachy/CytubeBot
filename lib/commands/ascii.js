/**
 * Commands that just print an ASCII into chat.
 *
 * They rely on a chat filter in the room replacing %^^% with <br />.
 */

import {RateLimiter} from 'limiter';

import {Rank} from '../constants.js';
import {sleep} from '../utils.js';

/** @typedef {import('./handle.js').Handler} Handler */

class Limiters {
  static FORSEN = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static POT_FRIEND = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static TROLL_DESPAIR = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static DEEZ = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static VALORANT = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static AMONG = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static XQCK = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PEPE_JAM = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static FUCK_YOU_CHAT = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static AMONG_E = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static GIGACHAD = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static KKONA = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static AYAYA = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static FLIP = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static KAPPA = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PAG_CHOMP = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static BEDGE = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static STAREGE = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static POGGERS = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PEEPO_SAD = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static MONKA_S = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static HYPERS = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static YEP = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static MONKA_W = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PEPE_LAUGH = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PEPEGA = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static UWU = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static TF = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static GACHI = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static FORGOR = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static FORTNITE = new RateLimiter({tokensPerInterval: 1, interval: 3600 * 1_000});
  static NO_MODS = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static MODS_SMELL_BAD = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static ONION = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static OSU = new RateLimiter({tokensPerInterval: 1, interval: 'minute'});
  static TRUE = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static TRIKOOL = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static PEPED = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static MIAU = new RateLimiter({tokensPerInterval: 1, interval: 3 * 1_000});
  static BE = new RateLimiter({tokensPerInterval: 1, interval: 60 * 1_000});
  static STARTMOGUS = new RateLimiter({tokensPerInterval: 1, interval: 600 * 1_000});
  static OTWO = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
  static ANKHA = new RateLimiter({tokensPerInterval: 1, interval: 30 * 1_000});
}

export const /** @type {!Map<string, Handler>} */ COMMANDS = new Map();

COMMANDS.set('forsen', async (bot, username, msg) => {
  const price = 1000;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.FORSEN.tryRemoveTokens(1)) {
      return bot.sendPm(username, `$forsen is on cooldown`);
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '!! glizzyR forsenE forsenE forsenE forsenE glizzyL !! ' +
      '!! glizzyR forsenE forsen1 forsen2 forsenE glizzyL !! !! glizzyR forsenE ' +
      'forsen3 forsen4 forsenE glizzyL !! !! glizzyR forsenE forsenE forsenE forsenE glizzyL !!');
});

COMMANDS.set('potfriend', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.POT_FRIEND.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$potfriend is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg('⠀');
  bot.sendChatMsg(
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣶⡾⠟' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣅⡀' +
      '%^^%⠀⠀⠀⠀⣠⣴⣿⡿⠋' +
      '%^^%⠀⣀⣴⣾⣿⡿⠋⠀⣠⣶⣶⠿⠿⠿⠿⠷⢶⣶⣤⣄' +
      '%^^%⢰⣿⣿⣿⣟⠀⠀⢸⣿⣿⣥⣤⣤⣄⣀⣀⣠⣬⣭⣿⠁' +
      '%^^%⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣄' +
      '%^^%⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠈⠙⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⣀⣹' +
      '%^^%⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣀⣤⣶⡿⠿⠟' +
      '%^^%⠀⠀⠀⠀⠀⠀⠈⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠰⣿⠇' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⡍⠉⠉⠙⠛⠛⠋⣩⣥⣤⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠻⢿⡋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⣻⡿⠿⠂');
});

COMMANDS.set('trolldespair', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.TROLL_DESPAIR.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$trolldespair is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠄⠉⠹⣾⣿⣛⣿⣿⣞⣿⣛⣺⣻⢾⣾⣿⣿⣿⣶⣶⣶⣄⡀⠄⠄⠄' +
      '%^^%⠄⠠⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣆⠄⠄' +
      '%^^%⠄⠘⠛⠛⠛⠛⠋⠿⣷⣿⣿⡿⣿⢿⠟⠟⠟⠻⠻⣿⣿⣿⣿⡀⠄' +
      '%^^%⢀⠄⠄⠄⠄⠄⠄⠄⠄⢛⣿⣁⠄⠄⠒⠂⠄⠄⣀⣰⣿⣿⣿⣿⡀' +
      '%^^%⠉⠛⠺⢶⣷⡶⠃⠄⠄⠨⣿⣿⡇⠄⡺⣾⣾⣾⣿⣿⣿⣿⣽⣿⣿' +
      '%^^%⠄⠄⠄⠄⠛⠁⠄⠄⠄⢀⣿⣿⣧⡀⠄⠹⣿⣿⣿⣿⣿⡿⣿⣻⣿' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠛⠟⠇⢀⢰⣿⣿⣿⣏⠉⢿⣽⢿⡏' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⠤⣤⣴⣾⣿⣿⣾⣿⣿⣦⠄⢹⡿⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠒⣳⣶⣤⣤⣄⣀⣀⡈⣀⢁⢁⢁⣈⣄⢐⠃⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣛⣻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⠄⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⣬⣽⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣻⣛⣿⡿⣟⣻⣿⣿⣿⣿⡟⠄⠄⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠛⢛⢿⣿⣿⣿⣿⣿⣿⣷⡿⠁⠄⠄⠄' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⠉⠈⠄⠄⠄⠄⠄⠄');
});

COMMANDS.set('deez', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.DEEZ.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$deez is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀⠀⠀⣤⣤⣤⣤⣀⠀⠀⣤⣤⣤⣤⡄⠀⣤⣤⣤⣤⠀⣤⣤⣤⣤⣤⠀⠀⠀⠀' +
      '%^^%⠀⠀⠀⣿⡇⠀⠈⢻⣧⠀⣿⡇⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⢠⡾⠃⠀⠀⠀⠀' +
      '%^^%⠀⠀⠀⣿⡇⠀⠀⢸⣿⠀⣿⡟⠛⠛⠀⠀⣿⠛⠛⠓⠀⠀⣠⡿⠁⠀⠀⠀⠀⠀' +
      '%^^%⠀⠀⠀⣿⡇⢀⣀⣾⠏⠀⣿⡇⠀⠀⠀⠀⣿⠀⠀⠀⠀⣴⡟⠁⠀⠀⠀⠀⠀⠀' +
      '%^^%⠀⠀⠀⠛⠛⠛⠋⠁⠀⠀⠛⠛⠛⠛⠃⠀⠛⠛⠛⠛⠁⠛⠛⠛⠛⠛⠀' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⡄⠀⢸⣿⠀⢸⡇⠀⠀⠀⣿⠀⠛⠛⢻⡟⠛⠋⣴⡟⠋⠛⠃' +
      '%^^%⠀⠀⠀⠀⠀⣿⠘⣿⡄⢸⣿⠀⢸⡇⠀⠀⠀⣿⠀⠀⠀⢸⡇⠀⠀⠙⢿⣦⣄⠀' +
      '%^^%⠀⠀⠀⠀⠀⣿⠀⠈⢿⣾⣿⠀⢸⣇⠀⠀⠀⣿⠀⠀⠀⢸⡇⠀⠀⠀⠀⠈⢻⣷' +
      '%^^%⠀⠀⠀⠀⠀⠿⠀⠀⠈⠿⠿⠀⠈⠻⠶⠶⠾⠋⠀⠀⠀⠸⠇⠀⠀⠻⠶⠶⠿⠃');
});

COMMANDS.set('valorant', async (bot, username, msg) => {
  const price = 1;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.VALORANT.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$valorant is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%UNINSTALLING VALORANT' +
      '%^^%▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢' +
      '%^^%　　╭━╮╭━╮╭╮　╱ 　　' +
      '%^^%　　╰━┫╰━┫╰╯╱╭╮ 　　' +
      '%^^%　　╰━╯╰━╯　╱　╰╯ 　　　　　' +
      '%^^%　　　     COMPLETE');
});

COMMANDS.set('osu', async (bot, username, msg) => {
  const price = 1;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.OSU.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$osu is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%UNINSTALLING OSU' +
      '%^^%▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢' +
      '%^^%　　╭━╮╭━╮╭╮　╱ 　　' +
      '%^^%　　╰━┫╰━┫╰╯╱╭╮ 　　' +
      '%^^%　　╰━╯╰━╯　╱　╰╯ 　　　　　' +
      '%^^%　　　     COMPLETE');
});

COMMANDS.set('among', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.AMONG.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$among is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄' +
      '%^^%⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷' +
      '%^^%⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿' +
      '%^^%⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿' +
      '%^^%⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿' +
      '%^^%⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇' +
      '%^^%⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧' +
      '%^^%⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿' +
      '%^^%⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿' +
      '%^^%⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇' +
      '%^^%⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃' +
      '%^^%⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇' +
      '%^^%⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏');
});

COMMANDS.set('xqck', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.XQCK.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$xqcK is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀⢴⣿⣿⢯⣤⠾⠛⠛⠛⠛⠛⠛⠛⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⣾⢿⣛⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⣰⠞⠁⠀⠀⠀⠀⠀⠀⠀⢠⣶⣾⣿⣿⣿⣶⣦⣤⣀⡈⢻⣿⣿⣿⠟⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣶⣶⣤⡀⠀⣠⣶⠀⠀⠈⠉⠙⠻⢿⣿⣿⣿⡿⠟⠀⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣷⣤⣼⣿⣤⡤⠞⠀⠀⠀⢨⣿⡟⠋⣴⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣁⡀⠀⠀⠀⣼⣿⢣⣾⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⣾⣿⣿⣾⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⠿⠛⠉⠉⠁⠀⢿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠸⣿⡇⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⢿⣇⣀⣤⣀⠀⠀⢰⣿⣇⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⣿⣿⢿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣦⡀⠀⠀⠀⣤⣤⣀⣀⡀⢀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣦⡀⠀⠀⠉⠉⢉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿');
});

COMMANDS.set('pepejam', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PEPE_JAM.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$pepejam is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠄⠄⠄⠄⠄⣠⣾⡿⠟⠋⠁⠄⢀⣀⡀⠤⣦⢰⣤⣶⢶⣤⣤⣈⣆' +
      '%^^%⠄⠄⠄⠄⢰⠟⠁⠄⢀⣤⣶⣿⡿⠿⣿⣿⣊⡘⠲⣶⣷⣶⠶⠶⠶⠦⠤⡀' +
      '%^^%⠄⠔⠊⠁⠁⠄⠄⢾⡿⣟⡯⣖⠯⠽⠿⠛⠛⠭⠽⠊⣲⣬⠽⠟⠛⠛⠭⢵⣂' +
      '%^^%⡎⠄⠄⠄⠄⠄⠄⠄⢙⡷⠋⣴⡆⠄⠐⠂⢸⣿⣿⡶⢱⣶⡇⠄⠐⠂⢹⣷⣶⠆' +
      '%^^%⡇⠄⠄⠄⠄⣀⣀⡀⠄⣿⡓⠮⣅⣀⣀⣐⣈⣭⠤⢖⣮⣭⣥⣀⣤⣤⣭⡵⠂' +
      '%^^%⣤⡀⢠⣾⣿⣿⣿⣿⣷⢻⣿⣿⣶⣶⡶⢖⣢⣴⣿⣿⣟⣛⠿⠿⠟⣛⠉' +
      '%^^%⣿⡗⣼⣿⣿⣿⣿⡿⢋⡘⠿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀' +
      '%^^%⣿⠱⢿⣿⣿⠿⢛⠰⣞⡛⠷⣬⣙⡛⠻⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⠿⠛⣓⡀' +
      '%^^%⢡⣾⣷⢠⣶⣿⣿⣷⣌⡛⠷⣦⣍⣛⠻⠿⢿⣶⣶⣶⣦⣤⣴⣶⡶⠾⠿⠟⠁' +
      '%^^%⣿⡟⣡⣿⣿⣿⣿⣿⣿⣿⣷⣦⣭⣙⡛⠓⠒⠶⠶⠶⠶⠶⠶⠶⠶⠿⠟' +
      '%^^%⠿⡐⢬⣛⡻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡶⠟⠃' +
      '%^^%⣾⣿⣷⣶⣭⣝⣒⣒⠶⠬⠭⠭⠭⠭⠭⠭⠭⣐⣒⣤⣄⡀' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦');
});

// eslint-disable-next-line valid-jsdoc
const /** @type {Handler} */ fuckYouChatHandler = async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.FUCK_YOU_CHAT.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$fuckyouchat is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⡟⠛⠛⠃⢸⣿⡇⠄⠄⣿⡇⠄⣼⣿⠟⠻⣿⣆⠄⣿⣿⢠⣾⣿⠋' +
      '%^^%⣿⣷⣶⣶⠄⢸⣿⡇⠄⠄⣿⡇⠄⣿⡏⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇' +
      '%^^%⣿⡇⠄⠄⠄⠘⣿⣧⣀⣰⣿⡇⠄⢿⣿⣀⣠⣿⡶⠄⣿⣿⠃⢹⣿⣆' +
      '%^^%⠛⠃⠄⠄⠄⠄⠘⠛⠛⠛⠋⠄⠄⠈⠛⠛⠛⠛⠁⠄⠛⠛⠄⠄⠛⠛⠃' +
      '%^^%⣤⡄⠄⠄⣤⣤⠄⢀⣠⣤⣄⡀⠄⢠⣤⡄⠄⠄⣤⣤' +
      '%^^%⢻⣿⣄⣼⣿⠃⣰⣿⠟⠛⢿⣿⡄⢸⣿⡇⠄⠄⣿⣿' +
      '%^^%⠄⠻⣿⡿⠁⠄⣿⣿⠄⠄⢸⣿⡇⢸⣿⡇⠄⠄⣿⣿' +
      '%^^%⠄⠄⣿⡇⠄⠄⠹⣿⣦⣤⣼⣿⠃⠄⣿⣷⣤⣴⣿⡏' +
      '%^^%⣾⣿⠋⠙⠿⠗⠄⣿⣿⣀⣀⣿⣿⠄⠄⣸⣿⢿⣷⠄⠛⠛⣿⣿⠛⠛' +
      '%^^%⣿⣿⠄⠄⣀⠄⠄⣿⣿⠿⠿⣿⣿⠄⢠⣿⣏⣸⣿⡆⠄⠄⣿⣿' +
      '%^^%⠻⣿⣦⣴⣿⡟⠄⣿⣿⠄⠄⣿⣿⠄⣼⣿⠿⠿⢿⣿⡀⠄⣿⣿');
};

COMMANDS.set('fuckyouchat', fuckYouChatHandler);
COMMANDS.set('firetruckyouchat', fuckYouChatHandler);

COMMANDS.set('amonge', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.AMONG_E.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$amonge is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⣾⣬⣽⣿⣿⣿⣿⡿⢿⣿⣆⠈⢻⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⡿⢀⣞⡉⢩⣙⣿⡿⠉⠄⣠⣤⠤⠉⠄⠄⢿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿⣿⣯⣿⣿⠁⢰⣾⣦⡤⠄⢀⣶⡀⠸⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿⣿⠟⠁⠄⠈⢿⣿⣿⣿⣿⡇⠄⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⠇⢸⣿⣿⡟⠛⠃⡠⠄⠄⠄⠈⣿⣿⣿⣿⡇⠄⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⠄⣿⣿⣿⣶⣾⣿⣿⣿⣤⣤⣄⣘⣿⣿⠁⡀⠄⢻' +
      '%^^%⣿⣿⣿⣿⣿⡇⢰⣿⣿⣿⣿⣿⣏⣉⣽⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸' +
      '%^^%⣿⣿⣿⣿⣿⠄⣼⣿⣁⣸⣿⣿⣿⣿⣿⡿⠟⠉⠙⠋⠹⠟⠁⠄⢸' +
      '%^^%⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿⠋⢠⣤⣤⣤⣤⠈⢿⣿⣷⣦⣄⠄⠄⢸' +
      '%^^%⠋⣀⣤⣄⣠⣼⣿⣿⣿⣿⡀⢹⣿⣿⣿⣿⠄⢸⣿⣿⣿⣿⣿⠄⢸' +
      '%^^%⠄⢿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢸⠿⠛⠉⣁⣠⣿⣿⣿⣿⣿⣿⠄⣼');
});

COMMANDS.set('gigachad', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.GIGACHAD.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$gigachad is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⡏⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿' +
      '%^^%⣿⣿⢏⣴⣿⣷⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠈⣿' +
      '%^^%⣿⣟⣾⣿⡟⠁⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⢢⠀⠀⠀⠀⠀⠀⠀⢸' +
      '%^^%⣿⣿⣿⣿⣟⠀⡴⠄⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀' +
      '%^^%⣿⣿⠟⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀' +
      '%^^%⣁⡀⠀⠀⢰⢠⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡄⠀⣴⣶⣿⡄' +
      '%^^%⡋⠀⠀⠀⠎⢸⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠗⢘⣿⣟⠛' +
      '%^^%⣿⠋⢀⡌⢰⣿⡿⢿⡀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣧' +
      '%^^%⣿⣷⢻⠄⠘⠛⠋⠛⠃⠀⠀⠀⠀⠀⢿⣧⠈⠉⠙⠛⠋⠀⠀⠀⣿⣿⣿' +
      '%^^%⣿⣧⠀⠈⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⢀⢃⠀⠀⢸⣿⣿⣿');
});

COMMANDS.set('kkona', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.KKONA.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$kkona is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡿⠛⠛⠛⠛⠻⢿⡿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⡇⠀⠀ KKona ⠀⠈⡇' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣧⣇⠀⠀⠀⣀⣤⣶⣷⠀⠠' +
      '%^^%⣀⠀⣠⣤⢀⣀⣠⣤⣤⣤⣤⣤⣿⣿⣿⣄⣼⣿⣿⣿⣿⣿⣿⣿⣦⣀' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠛⠛⠻⣿⣷' +
      '%^^%⣿⣿⣿⡿⠛⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠘⣿⡷' +
      '%^^%⢿⣿⡏⠀⠀⣶⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⣿⣧⣀' +
      '%^^%⠀⢹⣷⡀⠀⠀⠀⢀⣿⣿⣉⡉⠉⠉⠉⠉⢙⣿⣷⣄⠀⠀⠀⠀⢀⣼⣿⠛⠓' +
      `%^^%⠈⠛⠛⠛⠓⠒⠚⠛⠛⠛⠛⠛⠋⠙⠛⠛⠛⠛⠟⠿⠷⠶⠶⠾⠿⢿⠿ Don't mind me, just a feller out on the farm.`);
});

COMMANDS.set('ayaya', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.AYAYA.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$ayaya is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣆⠻⡫⣢⠿⣿⣿⣿⣿⣿⣿⣿⣷⣜⢻⣿' +
      '%^^%⣿⡏⣿⣿⣨⣝⠿⣿⣿⣿⣿⣿⢕⠸⣛⣩⣥⣄⣩⢝⣛⡿⠿⣿⣿⣆⢝' +
      '%^^%⣿⢡⣸⣿⣏⣿⣿⣶⣯⣙⠫⢺⣿⣷⡈⣿⣿⣿⣿⡿⠿⢿⣟⣒⣋⣙⠊' +
      '%^^%⡏⡿⣛⣍⢿⣮⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⢱⣾⣿⣿⣿⣝⡮⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⣋⣻⣿⣿⣿⣿' +
      '%^^%⢸⣿⣿⣿⣿⣿⣿⣷⣽⣿⣿⣿⣿⣿⣿⣿⡕⣡⣴⣶⣿⣿⣿⡟⣿⣿⣿' +
      '%^^%⡸⣿⣿⣿⣿⣿⣿⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿' +
      '%^^%⠷⡹⣿⠋⣉⣠⣤⣶⣶⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣷⢹⣿⣿' +
      '%^^%⡝⣿⡞⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⠁⣠⣤⣤⣦⣽⣿⣿⣿⡿⠋⠘⣿⣿' +
      '%^^%⣿⡹⣿⡼⣿⣿⣿⣿⣿⣿⣿⣧⡰⣿⣿⣿⣿⣿⣹⡿⠟⠉⡀⠄⠄⢿⣿');
});

COMMANDS.set('flip', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.FLIP.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$flip is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%(╯°□°)╯︵ ┻━┻ FLIP THAT TABLE.' +
      '%^^%┻━┻ ︵ ヽ(°□°ヽ) FLIP THIS TABLE.' +
      `%^^%┻━┻ ︵ ＼\('0')/／ ︵ ┻━┻ FLIP ALL THE TABLES` +
      '%^^%ಠ_ಠ Son... ಠ_ಠ Put. ಠ__ಠ The tables. ಠ___ಠ Back.' +
      '%^^%(╮°-°)╮┳━┳ ' +
      '%^^%(╯°□°)╯︵ ┻━┻ NEVER!!!');
});

COMMANDS.set('kappa', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.KAPPA.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$kappa is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%░░░░▄▀▀▀▀▀█▀▄▄▄▄░░░░' +
      '%^^%░░▄▀▒▓▒▓▓▒▓▒▒▓▒▓▀▄░░' +
      '%^^%▄▀▒▒▓▒▓▒▒▓▒▓▒▓▓▒▒▓█░' +
      '%^^%█▓▒▓▒▓▒▓▓▓░░░░░░▓▓█░' +
      '%^^%█▓▓▓▓▓▒▓▒░░░░░░░░▓█░' +
      '%^^%▓▓▓▓▓▒░░░░░░░░░░░░█░' +
      '%^^%▓▓▓▓░░░░▄▄▄▄░░░▄█▄▀░' +
      '%^^%░▀▄▓░░▒▀▓▓▒▒░░█▓▒▒░░' +
      '%^^%▀▄░░░░░░░░░░░░▀▄▒▒█░' +
      '%^^%░▀░▀░░░░░▒▒▀▄▄▒▀▒▒█░' +
      '%^^%░░▀░░░░░░▒▄▄▒▄▄▄▒▒█░' +
      '%^^%░░░▀▄▄▒▒░░░░▀▀▒▒▄▀░░' +
      '%^^%░░░░░▀█▄▒▒░░░░▒▄▀░░░');
});

COMMANDS.set('pagchomp', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PAG_CHOMP.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$pagchomp is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⡿⠟⠛⠛⠛⠛⠉⠉⠙⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟' +
      '%^^%⣤⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣏⣀⣀⣀⡀' +
      '%^^%⣿⣿⣿⡿⠿⠛⠛⠻⠿⠟⠉⠉⠉⢻⣿⣿⣿⡿⠟⠋⣡⣼⣿⣿⣿⡄' +
      '%^^%⣭⣤⣶⣶⣿⣿⠃⠀⠀⢀⣀⣤⣶⣿⣿⣿⣿⡅⡀⢀⣩⣤⣤' +
      '%^^%⣿⣿⣛⡛⠛⠛⠛⢋⣩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⠛⠛⠓⠠' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣦' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⢿⡿⢿⣿⣿⣿⠃' +
      '%^^%⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⣄⣀⣀⠀⠀⠀⠀⠀⢰⣾⣿⣿⠏' +
      '%^^%⠀⠀⠉⣩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣜⡻⠋' +
      '%^^%⣿⣾⣖⣻⣿⣿⡿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠛⠋⠉⠉⢉⡽⠃');
});

COMMANDS.set('bedge', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.BEDGE.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$bedge is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣿⣿⣿⡿⠿⠋⠁⠀⢀⠠⢤⣤⡰⡈⠀⠀⠀⠀⠀⠀⢹⣿⣿' +
      '%^^%⣿⣿⣿⠿⠛⠋⠁⠀⠀⠀⡠⠊⠔⠀⠀⠀⠀⠀⢀⠀⠀⠀⢀⡴⣫⡿⣿⣿' +
      '%^^%⠟⠋⠀⠀⠀⠀⠀⠀⠀⠄⠀⠸⠀⠀⠀⠀⠀⠀⢀⡆⠲⠾⠕⣪⠏⠀⢸⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠰⡀⠀⠀⠀⣀⡴⢊⠇⠉⠑⠻⠅⢀⠜⢹⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠋⠭⠭⢅⡴⠋⠀⠀⠀⣀⠔⠁⡠⠎⠹⣿' +
      '%^^%⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⢦⣀⣉⠽⠟⠉⠀⢀⡠⠔⠊⢁⡤⠊⠀⠁' +
      '%^^%⠀⠀⠀⠐⠁⢀⠤⠒⠢⢄⣀⣀⣀⣀⠤⠴⠒⠊⠁⣀⠤⠚⣡⣴⠟⠊⠐' +
      '%^^%⠀⢀⠂⠀⠀⡇⠀⢤⡀⠀⠀⠀⠀⠀⣀⡠⠴⠒⠉⣠⣴⡿⠋⡁' +
      '%^^%⠀⠆⠀⠀⠀⠳⣄⠀⠀⠉⠉⠉⠉⠉⠀⣀⣠⣴⡿⠛⠁⠀⡰⠆⠰' +
      '%^^%⠀⡄⠀⠀⠀⠀⠈⠙⠒⠒⠒⠒⣒⣿⣿⡿⠛⡉⠀⠀⢀⠎⠀⢰⣊' +
      '%^^%⠈⠈⠂⣄⡀⠀⠀⠀⢀⣠⣶⣿⡿⠛⡡⠀⠈⠀⠀⠀⠀⠀⠀⠈⠇⠀⠀⠀⢡' +
      '%^^%⣇⣆⠀⠧⠤⣭⣽⣶⣿⡿⢛⠁⠀⠀⠠⠀⠐⠃⠀⠀⠠⡄⠀⠀⠀⠀⠀⠀⠸' +
      '%^^%⣟⣿⣴⣾⣿⣿⡿⠋⠁⠀⢥⡀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣁⡤⠖⠀⠀⠀⠠⠠' +
      '%^^%⣿⣿⣿⠿⡫⠕⠈⠀⠀⠀⠀⠁⢀⢀⡀⠀⠀⠀⠐⠶⠛⠉⠀⢀⠀⠊' +
      '%^^%⣿⡯⠓⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⣀⡤⠒⠋⠁');
});

COMMANDS.set('starege', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.STAREGE.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$starege is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣿⣿⠟⠋⠉⠉⠉⠉⠉⠛⠻⠛⠉⠉⠛⠉⠻⢿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⠃⠄⣠⡶⢶⣶⣄⠄⠄⠄⢀⣴⣶⣶⣄⠄⠈⠻⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⠟⠁⠄⠄⣿⡇⢀⢻⣿⣷⡀⢰⣿⣿⠁⠈⣿⡇⠄⠄⠙⢿⣿⣿⣿' +
      '%^^%⣿⠟⢁⣀⣀⣀⡀⢿⡇⠘⣸⣿⣿⠁⢿⣿⣿⡘⠄⣿⠇⣀⣀⣀⣀⡉⠻⣿' +
      '%^^%⢃⣵⣿⣿⣿⡿⣿⠈⠻⠿⣿⠿⢋⣄⡜⠿⣿⣿⡾⠋⢠⡿⣿⣿⣿⣿⣦⡈' +
      '%^^%⣿⣿⠿⠿⣿⣧⡈⠓⠄⠄⣀⣤⣾⣿⣿⣦⣀⠄⠄⠄⠚⢁⣼⣿⣿⣿⣿⣿' +
      '%^^%⡿⢁⢶⣦⡈⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⡿⢋⣭⡍⠙⣿⣿' +
      '%^^%⠃⣾⣄⠻⣿⣦⣈⡛⠻⠿⢿⠿⢿⣿⣿⠿⠿⠿⠟⠛⣁⣴⣿⠏⣡⠄⢿⣿' +
      '%^^%⠂⠙⣿⣷⣄⡙⠛⠻⠿⣶⣶⣶⣶⣶⣶⣶⣶⡶⠿⠿⠛⢋⣠⣾⡟⠄⠚⠛' +
      '%^^%⣤⡀⠄⠙⠻⠿⢷⣶⣦⣤⣤⣤⢤⣤⣤⣤⣤⣤⣴⣶⣾⠿⠟⠋⠄⠄⢀⣠' +
      '%^^%⣛⣩⣴⣤⣀⠄⠄⠄⠄⠉⠉⠈⠈⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⣀⣐⣛⣻' +
      '%^^%⣿⣿⣿⣿⣿⣿⣷⣶⣶⣤⣤⣤⣤⣤⣤⣄⣠⣤⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿');
});

COMMANDS.set('poggers', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.POGGERS.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$poggers is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠄⠰⠛⠋⢉⣡⣤⣄⡉⠓⢦⣀⠙⠉⠡⠔⠒⠛⠛⠛⠶⢶⣄⠘⢿' +
      '%^^%⢀⡔⠄⠄⠄⠙⣿⣿⣿⣷⣤⠉⠁⡀⠐⠒⢿⣿⣿⣿⣶⣄⡈⠳⢄' +
      '%^^%⣼⠁⢠⡄⠄⠄⣿⣿⣿⣿⡟⠄⡐⠁⡀⠄⠈⣿⣿⣿⣿⣿⣷⣤⡈' +
      '%^^%⢻⡀⠈⠄⠄⣀⣿⣿⣿⡿⠃⠄⡇⠈⠛⠄⠄⣿⣿⣿⣿⣿⣿⠟⠋' +
      '%^^%⠄⢉⡓⠚⠛⠛⠋⣉⣩⣤⣤⣀⠑⠤⣤⣤⣾⣿⣿⣿⡿⠛⢁⣤⣾' +
      '%^^%⠄⠈⠙⠛⠋⣭⣭⣶⣾⣿⣿⣿⣷⣦⢠⡍⠉⠉⢠⣤⣴⠚⢩⣴⣿' +
      '%^^%⠄⢴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣭⣭⣭⣥⣴⣶⣿⣿⣿⣿' +
      '%^^%⠄⣴⣶⡶⠶⠶⠶⠶⠶⠶⠶⠶⣮⣭⣝⣛⠿⠿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠄⠙⣿⡄⠄⠄⢀⡤⠬⢭⣝⣒⢂⠭⣉⠻⠿⣷⣶⣦⣭⡛⣿⣿⣿' +
      '%^^%⠄⠄⠸⣿⡇⠄⠸⣎⣁⣾⠿⠉⢀⠇⣸⣿⣿⢆⡉⠹⣿⣿⢸⣿⣿' +
      '%^^%⠄⠄⠄⣿⡇⠄⢀⡶⠶⠶⠾⠿⠮⠭⠭⢭⣥⣿⣿⣷⢸⣿⢸⣿⣿');
});

COMMANDS.set('peeposad', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PEEPO_SAD.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$peeposad is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠻⠿⢿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⠟⠋⢀⣠⡤⠤⢭⣛⡉⢀⡤⠴⠶⠶⡶⢆⣉⠙⠻⢿⣿' +
      '%^^%⣿⣿⣿⣿⡿⠋⠀⠠⠞⠉⢀⣀⡤⣤⣤⣭⠭⣤⡤⣽⣿⢿⠿⠛⠛⠳⣌⢻' +
      '%^^%⣿⣿⣿⢿⡅⠀⠀⠀⠀⣶⠿⠛⠉⣡⠤⠭⠭⠷⡔⠚⠛⠉⠉⠉⢛⢛⢏⣿' +
      '%^^%⣿⣿⠃⠘⠇⠀⠀⠀⠀⠈⣿⠉⠁⢒⣒⣶⠶⡦⠒⠒⠒⠚⠓⠛⠉⡿⣿⣿' +
      '%^^%⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⣟⠀⢉⣉⣠⣤⣤⢶⣒⣠⣭⣭⣭⣭⣉⡗⣼⣿' +
      '%^^%⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠛⠿⠭⠶⠖⠛⠉⠀⠈⠁⠈⠉⠛⢣⣿⣿' +
      '%^^%⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿' +
      '%^^%⡏⣶⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣤⣤⣶⣿⣿⣜⠿⣿' +
      '%^^%⢣⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡝');
});

COMMANDS.set('monkas', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.MONKA_S.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$monkas is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⡿⠋⠀⠸⠄⢀⣀⠠⠤⠤⣀⡀⠐⡄⠀⠀⠀⠀⠀⠾⠂⠈⠻⣿⣿' +
      '%^^%⣿⡟⠀⠀⠀⠠⠋⠁⠀⠀⠀⠀⠀⠉⠙⠻⠒⠚⠛⠛⠛⠛⠒⠒⠦⠘⢿⣿' +
      '%^^%⠟⠀⠀⡆⠀⠀⠀⠀⢀⣤⣴⣶⣶⣶⣶⣶⣧⣄⢀⣠⣤⣤⣶⣶⣶⣤⣤⣙⢿' +
      '%^^%⢸⠀⠸⠅⠀⠀⣴⣾⣿⣿⣿⣿⣿⡏⡉⠙⣿⣿⣼⣿⣿⣿⣿⣿⢋⡉⢻⣿⡆' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⢉⠛⠿⢿⣿⣿⣷⣧⣶⡿⠟⠸⠿⠿⣿⡿⠿⠶⠬⠾⠿⢃' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠤⠤⠬⠭⠁⣤⠤⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠔⠊⠁⠀⠀⠀⠑⠢⡄⠒⠒⠂⠰⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡈⣿' +
      '%^^%⠀⠀⠀⠀⠀⣼⣿⣧⣭⣭⣍⣛⣛⣛⡶⠶⠶⢦⣤⣤⣤⣤⣤⣴⣶⠿⠛⣡⣿' +
      '%^^%⠀⠀⠀⠰⢄⠈⠉⠉⠉⠉⠉⠉⠙⠛⠛⠿⠿⠿⠷⠶⠶⣶⣶⣶⡶⢟⣸⣿⣿' +
      '%^^%⣀⡀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿' +
      '%^^%⠀⠈⠉⠓⠒⠢⠤⠤⠤⠤⣤⣤⣤⣤⠤⠄⠀⠀⠀⢴⣶⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣿⣿⣿');
});

COMMANDS.set('hypers', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.HYPERS.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$hypers is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣏⠉⠙⠋⠙⣿⣿' +
      '%^^%⣿⣿⣿⠟⠋⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠈⠀⠀⣸⣿' +
      '%^^%⣿⡟⠁⠀⢠⣶⡷⠶⠚⠿⠿⣿⣿⣿⡿⠛⠋⠉⠉⠉⠻⡃⠀⠀⠀⠈⠙⠻⣿' +
      '%^^%⣿⠁⠀⠠⠟⠉⠀⣀⠤⠤⠤⢤⣉⠉⢀⣠⠤⠒⢒⠶⠚⠓⠀⠈⠓⢦⡀⠀⠈⣿' +
      '%^^%⡿⠀⠀⠀⠀⠴⠋⠀⠀⢀⡠⠤⠌⣀⣀⡀⠄⠊⠁⣠⠄⡀⠈⠻⣶⣄⢻⠀⠀⢸' +
      '%^^%⡇⠀⠀⠀⠀⠀⢀⡠⠞⢁⣤⢠⡄⢨⠹⣿⣷⡄⣾⣿⠀⠄⠘⠂⣿⣿⢣⠀⠀⢸' +
      '%^^%⡇⠀⠀⠀⠀⠛⠉⠀⢴⣿⣿⠀⠂⠈⠀⠸⠟⠘⠻⠿⠆⠀⠀⠀⠈⡰⡿⠀⠀⢸' +
      '%^^%⡇⠀⠀⠀⠀⠀⣀⣀⣀⣉⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣤⣴⡿⢧⡇⠀⣾' +
      '%^^%⡇⠀⠀⠀⠀⠸⣿⣯⣙⣛⡛⠿⠿⠿⠿⠿⠿⠿⠟⢛⣛⣋⣭⣥⡖⡿⠁⠀⢠⣿' +
      '%^^%⣧⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠉⠉⠀⠀⠀⠀⢀⣾⣿');
});

COMMANDS.set('yep', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.YEP.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$yep is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⠟⠩⠶⣾⣿⡿⢯⣍⣿' +
      '%^^%⣿⣿⣿⠏⠀⠀⠈⠉⠀⣠⢤⠈⠋⠀⢠⣄⠉⢻⣿⣿⣿⣿⠃⠈⢿⣿' +
      '%^^%⣿⡟⠁⠀⠀⠀⣹⣦⣀⣙⣈⣀⢶⣤⣈⣁⣠⣾⣿⣿⣿⡿⠀⠀⠼⢿⣿⣿' +
      '%^^%⡏⠀⠀⠠⣤⠦⣭⣙⣛⠛⠋⠁⠀⠙⠛⢉⣻⣿⣿⣿⠋⠁⠀⠀⠀⠀⠀⠀⠈⣿' +
      '%^^%⡇⠀⠀⠀⠛⠮⣽⣒⣻⣭⢽⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿' +
      '%^^%⡇⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⣼⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿' +
      '%^^%⡟⠳⢤⣤⣀⣀⣀⠀⠀⠀⣀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣷⣦⣤⣤⣤⣤⣤⣴' +
      '%^^%⣇⠀⠀⠀⠀⠉⠉⠈⠁⠈⠉⠉⡙' +
      '%^^%⢠⣶⠿⠿⣷⡄⠈⣠⣶⠿⢿⣶⡄⠉⣡⣶⠿⠿⣶⡄⠄⣿⡇⢀⣾⡿⠃' +
      '%^^%⣿⣏⠄⠄⠄⠄⢰⣿⡇⢀⠄⣿⣿⠄⣿⡏⠄⠄⠄⠄⠄⣿⣿⣿⣿⡀' +
      '%^^%⠹⣿⣄⣠⣶⡆⠄⢿⣷⣀⣠⣿⡟⠄⢻⣷⣄⣠⣶⠆⠄⣿⡏⠈⢿');
});

COMMANDS.set('monkaw', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.MONKA_W.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$monkaw is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠴⠖⠒⠚⠋⠉⠉⠉⠙⠒⠒⠲⢤⡀⢀⡀⠤⠐⠒⠐⠒⠒⠒⠒⠒⠒⠶⢮⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠙⠄' +
      '%^^%⠀⠀⠀⠀⠀⣴⣿⣙⣿⣿⡄⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣹⣷⣦' +
      '%^^%⠀⠀⠀⠀⠀⢻⣯⣨⣏⣹⠃⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀⠈⢏⢈⣧⠝' +
      '%^^%⡀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⢀⡤⠞⢳⡤⣄⣀⡀⠀⠀⠀⠀⠀⠀⢀⣀⣠⡤' +
      '%^^%⣍⡛⠒⠶⠤⢤⣤⣤⠶⠶⣛⣡⠀⣰⠟⠀⠀⠈⠉⠙⠛⠛⠛⠛⠛⠉⠉⢀⣴' +
      '%^^%⠉⠛⠛⠓⠒⠶⠶⠖⠛⢛⣋⡵⠛⠉⠀⠀⠢⢄⡀⠀⠀⠀⠀⠀⠀⣀⡴⠛⠁' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣤⠾⠛⠉⠀⠀⠀⠀⠀⠀⠀⠉⠻⣶⠶⠶⠶⠟⠛⣇⠀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠥⠀⠀⠀⠀⠈⢷⡀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻' +
      '%^^%⣀⣀');
});

COMMANDS.set('pepelaugh', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PEPE_LAUGH.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$pepelaugh is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⣿⣿⣿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠉⢟⠉⠄⠄⠄⠄⠄⠈⢻⣿' +
      '%^^%⣿⣿⣿⡿⠃⠄⠄⠤⠐⠉⠉⠉⠉⠉⠒⠬⡣⠤⠤⠄⠄⠄⠤⠤⠿⣿⣿' +
      '%^^%⣿⣿⣿⠁⠄⠄⠄⠄⠄⠄⠠⢀⡒⠤⠭⠅⠚⣓⡆⡆⣔⡙⠓⠚⠛⠄⣹⠿⣿' +
      '%^^%⠟⠁⡌⠄⠄⠄⢀⠤⠬⠐⣈⠠⡤⠤⠤⣤⠤⢄⡉⢁⣀⣠⣤⣤⣀⣐⡖⢦⣽' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠐⠄⡿⠛⠯⠍⠭⣉⣉⠉⠍⢀⢀⡀⠉⠉⠉⠒⠒⠂⠄⣻' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠩⠵⠒⠒⠲⢒⡢⡉⠁⢐⡀⠬⠍⠁⢉⣉⣴⣿' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢉⣒⡉⠁⠁⠄⠄⠉⠂⠙⣉⣁⣀⣙⡿⣿' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⢠⠄⡖⢉⠥⢤⠐⢲⠒⢲⠒⢲⠒⠲⡒⠒⡖⢲⠂⠄⢀⣿' +
      '%^^%⠄⠄⠄⠄⠄⠄⠄⠈⢆⡑⢄⠳⢾⠒⢺⠒⢺⠒⠚⡖⠄⡏⠉⣞⠞⠁⣠⣾' +
      '%^^%⠄⠄⠄⠄⠄⢆⠄⠄⠄⠈⠢⠉⠢⠍⣘⣒⣚⣒⣚⣒⣒⣉⠡⠤⣔⣾⣿');
});

COMMANDS.set('pepega', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PEPEGA.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$pepega is on cooldown Pepega');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠁⠁⠁⠁⠁⠁⠐⢶⣶⣶⣶⣤⣤⡀⠁⠁⣠⣀⣀' +
      '%^^%⠁⠁⠁⠁⠁⠁⠁⠁⠙⢿⣯⣠⣶⣦⣤⣤⣌⣛⠻⢇⣠⣤⣤' +
      '%^^%⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠻⣿⣿⣿⡟⢉⡤⢤⣤⣤⡍⠛⢡⢖⣥⣶⣦⣀' +
      '%^^%⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⣠⣿⣿⣿⡏⣭⣶⣿⣿⠟⢿⣦⡡⣿⣿⡇⠁⡙⣷⡀' +
      '%^^%⠁⠁⠁⠁⠁⠁⠁⣀⣴⣿⣿⣿⣿⣿⣿⡞⣿⣿⡟⢀⡀⣿⣿⢻⣿⣿⣀⣁⣿⠏' +
      '%^^%⠁⠁⠁⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣟⢰⢻⣿⣇⣈⣴⣿⠟⢨⣛⠛⠛⠉⠁' +
      '%^^%⠁⣠⣶⣿⣿⡟⢋⠤⣤⠘⢿⣿⣧⡙⠻⠌⠒⠙⠛⢛⣫⣥⣿⣦⡈⠉⣡⣴⣾⠇' +
      '%^^%⢰⣿⣿⣿⣿⠁⡇⠁⠙⠷⣤⡙⠻⢿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁' +
      '%^^%⠘⣿⣿⣿⣿⣆⠻⣄⠁⣀⡀⠉⠙⠒⠂⠉⠍⠉⠉⠉⠉⣩⣍⣁⣂⡈⠠⠂' +
      '%^^%⠁⠘⢿⣿⣿⣿⣦⡉⠳⢬⣛⠷⢦⡄⠁⠁⠁⠁⠁⣀⣼⣿⣿⠿⠛⠋⠁' +
      '%^^%⠁⠁⠁⠉⠻⢿⣿⣿⣷⣦⣬⣍⣓⡒⠒⣒⣂⣠⡬⠽⠓⠂⠁');
});

COMMANDS.set('uwu', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.UWU.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$uwu is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⢕⢕⢕⢕⠅⢗⢕⠕⣠⠄⣗⢕⢕⠕⢕⢕⢕⠕⢠⣿⠐⢕⢕⢕⠑⢕⢕⠵' +
      '%^^%⢕⢕⢕⠁⢜⠕⢁⣴⣿⡇⢓⢕⢵⢐⢕⢕⠕⢁⣾⢿⣧⠑⢕⢕⠄⢑⢕⠅' +
      '%^^%⢕⠵⢁⠔⢁⣤⣤⣶⣶⣶⡐⣕⢽⠐⢕⠕⣡⣾⣶⣶⣶⣤⡁⢓⢕⠄⢑⢅' +
      '%^^%⣧⠄⣶⣾⣿⣿⣿⣿⣿⣿⣷⣔⢕⢄⢡⣾⣿⣿⣿⣿⣿⣿⣿⣦⡑⢕⢤⠱' +
      '%^^%⢕⠅⣾⣿⠋⢿⣿⣿⣿⠉⣿⣿⣷⣦⣶⣽⣿⣿⠈⣿⣿⣿⣿⠏⢹⣷⣷⡅' +
      '%^^%⢕⢥⢻⣿⡀⠈⠛⠛⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⡀⠈⠛⠛⠁⠄⣼⣿⣿⡇' +
      '%^^%⢕⢽⢸⢟⢟⢖⢖⢤⣶⡟⢻⣿⡿⠻⣿⣿⡟⢀⣿⣦⢤⢤⢔⢞⢿⢿⣿⠁' +
      '%^^%⢕⠅⣐⢕⢕⢕⢕⢕⣿⣿⡄⠛⢀⣦⠈⠛⢁⣼⣿⢗⢕⢕⢕⢕⢕⢕⡏' +
      '%^^%⢕⠅⢓⣕⣕⣕⣕⣵⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣕⢕⢕⢕⢕⡵' +
      '%^^%⢕⠃⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃');
});

COMMANDS.set('tf', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.TF.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$tf is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░' +
      '%^^%░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░' +
      '%^^%░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░' +
      '%^^%░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░' +
      '%^^%░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░' +
      '%^^%█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█' +
      '%^^%█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█' +
      '%^^%░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░' +
      '%^^%░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░' +
      '%^^%░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░' +
      '%^^%░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░' +
      '%^^%░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░' +
      '%^^%░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░' +
      '%^^%░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░' +
      '%^^%░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░');
});

COMMANDS.set('gachi', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.GACHI.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$gachi is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%░░░░░▓▓▓▓▓▓▓▓▓▓▓' +
      '%^^%░░░▓▓▓▓▓▓▒▒▒▒▒▒▓▓' +
      '%^^%░░▓▓▓▓▒░░▒▒▓▓▒▒▓▓▓▓' +
      '%^^%░▓▓▓▓▒░░▓▓▓▒▄▓░▒▄▄▄▓' +
      '%^^%▓▓▓▓▓▒░░▒▀▀▀▀▒░▄░▄▒▓▓' +
      '%^^%▓▓▓▓▓▒░░▒▒▒▒▒▓▒▀▒▀▒▓▒▓' +
      '%^^%▓▓▓▓▓▒▒░░░▒▒▒░░▄▀▀▀▄▓▒▓' +
      '%^^%▓▓▓▓▓▓▒▒░░░▒▒▓▀▄▄▄▄▓▒▒▒▓' +
      '%^^%░▓█▀▄▒▓▒▒░░░▒▒░░▀▀▀▒▒▒▒' +
      '%^^%░░▓█▒▒▄▒▒▒▒▒▒▒░░▒▒▒▒▒▒▓' +
      '%^^%░░░▓▓▓▓▒▒▒▒▒▒▒▒░░░▒▒▒▓▓' +
      '%^^%░░░░░▓▓▒░░▒▒▒▒▒▒▒▒▒▒▒▓▓');
});

COMMANDS.set('forgor', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.FORGOR.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$forgor is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀▬▬▬▬▬.◙.▬▬▬▬▬  ' +
      '%^^%⠀⠀⠀⠀⠀▂▄▄▓▄▄▂  ' +
      '%^^%⠀⠀⠀⠀◢◤█▀▀████▄▄▄▄▄▄ ◢◤  ' +
      '%^^%⠀⠀⠀⠀█▄ █ █▄ ███▀▀▀▀▀▀▀ ╬  ' +
      '%^^%⠀⠀⠀⠀◥ █████ ◤  ' +
      '%^^%⠀⠀⠀⠀⠀⠀═╩══╩═  ' +
      '%^^%⠀⠀⠀⠀⠀⠀ ╬═╬  ' +
      '%^^%⠀⠀⠀⠀⠀⠀ ╬═╬ just dropped down to say  ' +
      '%^^%⠀ ⠀⠀⠀⠀⠀╬═╬  ' +
      '%^^%⠀ ⠀⠀⠀⠀⠀╬═╬ I forgor' +
      '%^^%⠀ ⠀⠀⠀⠀⠀╬═╬   ' +
      '%^^%⠀⠀⠀💀/ ╬═╬   ' +
      '%^^%⠀⠀⠀/▌ ⠀ ╬═╬   ' +
      '%^^%⠀⠀⠀/ \\');
});

COMMANDS.set('fortnite', async (bot, username, msg) => {
  if (!(await bot.checkPermission(username, Rank.MOD, 'I'))) {
    const price = 15000;
    const currentPoints = await bot.db.getUserPoints(username);
    if (currentPoints < price) {
      bot.sendPm(username, `You don't have enough points for this command(${price})`);
      return;
    } else {
      if (!Limiters.FORTNITE.tryRemoveTokens(1)) {
        return bot.sendPm(username, '$fortnite is on cooldown');
      } else {
        await bot.db.updateUserPoints(username, -price);
      }
    }
  }

  const waitTimeMs = 175;

  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⣀⣤' +
      '%^^%⠀⠀⠀⠀⣿⠿⣶' +
      '%^^%⠀⠀⠀⠀⣿⣿⣀' +
      '%^^%⠀⠀⠀⣶⣶⣿⠿⠛⣶' +
      '%^^%⠤⣀⠛⣿⣿⣿⣿⣿⣿⣭⣿⣤' +
      '%^^%⠒⠀⠀⠀⠉⣿⣿⣿⣿⠀⠀⠉⣀' +
      '%^^%⠀⠤⣤⣤⣀⣿⣿⣿⣿⣀⠀⠀⣿' +
      '%^^%⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣭⣶⠉' +
      '%^^%⠀⠀⠀⠤⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⣭⣿⣿⣿⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣉⣿⣿⠿⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣿⠀⠀⠀⣿⣿⣤' +
      '%^^%⠀⠀⠀⣀⣿⣿⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣿⣿⣿⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣿⣿⠛⠀⠀⠀⠉⣿⣿' +
      '%^^%⠀⠀⠀⠉⣿⠀⠀⠀⠀⠀⠛⣿' +
      '%^^%⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⣿' +
      '%^^%⠀⠀⠀⠀⣛⠀⠀⠀⠀⠀⠀⠛⠿⠿⠿' +
      '%^^%⠀⠀⠀⠛⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⣀⣶⣀' +
      '%^^%⠀⠀⠀⠒⣛⣭' +
      '%^^%⠀⠀⠀⣀⠿⣿⣶' +
      '%^^%⠀⣤⣿⠤⣭⣿⣿' +
      '%^^%⣤⣿⣿⣿⠛⣿⣿⠀⣀' +
      '%^^%⠀⣀⠤⣿⣿⣶⣤⣒⣛' +
      '%^^%⠉⠀⣀⣿⣿⣿⣿⣭⠉' +
      '%^^%⠀⠀⣭⣿⣿⠿⠿⣿' +
      '%^^%⠀⣶⣿⣿⠛⠀⣿⣿' +
      '%^^%⣤⣿⣿⠉⠤⣿⣿⠿' +
      '%^^%⣿⣿⠛⠀⠿⣿⣿' +
      '%^^%⣿⣿⣤⠀⣿⣿⠿' +
      '%^^%⠀⣿⣿⣶⠀⣿⣿⣶' +
      '%^^%⠀⠀⠛⣿⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⣉⣿⠀⣿⣿' +
      '%^^%⠀⠶⣶⠿⠛⠀⠉⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⠀⠀⠀⣶⣿⠿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿' +
      '%^^%⠀⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⣀' +
      '%^^%⠀⠿⣿⣿⣀' +
      '%^^%⠀⠉⣿⣿⣀' +
      '%^^%⠀⠀⠛⣿⣭⣀⣀⣤' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⠛⠿⣶⣀' +
      '%^^%⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣉⣶' +
      '%^^%⠀⠀⠉⣿⣿⣿⣿⣀⠀⠀⣿⠉' +
      '%^^%⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⣿⣿⣿⠿⠉⣿⣿⣿⣿' +
      '%^^%⠀⣿⣿⠿⠀⠀⣿⣿⣿⣿' +
      '%^^%⣶⣿⣿⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠛⣿⣿⣀⠀⠀⠀⣿⣿⣿⣿⣶⣀' +
      '%^^%⠀⣿⣿⠉⠀⠀⠀⠉⠉⠉⠛⠛⠿⣿⣶' +
      '%^^%⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉' +
      '%^^%⣀⣶⣿⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣶⣿⣿⣿⣶⣶⣤⣶⣶⠶⠛⠉⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⣤⣿⠿⣿⣿⣿⣿⣿⠀⠀⠉' +
      '%^^%⠛⣿⣤⣤⣀⣤⠿⠉⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠉⣿⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣛⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠛⠿⣿⣿⣿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⠛⠉⠀⠀⠀⠛⠿⣿⣿⣶⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠛⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⣤⣶⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⣤⣶⣀⠿⠶⣿⣿⣿⠿⣿⣿⣿⣿' +
      '%^^%⠉⠿⣿⣿⠿⠛⠉⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠉⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣤⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣀⣿⣿⣿⠿⠉⠀⠀⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣿⠿⠉⠀⠀⠀⠀⠿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠛⣿⣿⣀⠀⠀⠀⠀⠀⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠉⣿⣿⠀⠀⠀⠀⠀⠀⠉⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿⣿' +
      '%^^%⠀⠀⠀⠀⠤⣿⠿⠿⠿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⣀' +
      '%^^%⠀⠀⣶⣿⠿⠀⠀⠀⣀⠀⣤⣤' +
      '%^^%⠀⣶⣿⠀⠀⠀⠀⣿⣿⣿⠛⠛⠿⣤⣀' +
      '%^^%⣶⣿⣤⣤⣤⣤⣤⣿⣿⣿⣀⣤⣶⣭⣿⣶⣀' +
      '%^^%⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⠛⠿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠀⣿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣶⣿⠛⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠀⠀⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⣶⣿⣶' +
      '%^^%⠀⠀⠀⣤⣤⣤⣿⣿⣿' +
      '%^^%⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣶' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⣿⣉⣿⣿⣿⣿⣉⠉⣿⣶' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿' +
      '%^^%⠀⣤⣿⣿⣿⣿⣿⣿⣿⠿⠀⣿⣶' +
      '%^^%⣤⣿⠿⣿⣿⣿⣿⣿⠿⠀⠀⣿⣿⣤' +
      '%^^%⠉⠉⠀⣿⣿⣿⣿⣿⠀⠀⠒⠛⠿⠿⠿' +
      '%^^%⠀⠀⠀⠉⣿⣿⣿⠀⠀⠀⠀⠀⠀⠉' +
      '%^^%⠀⠀⠀⣿⣿⣿⣿⣿⣶' +
      '%^^%⠀⠀⠀⠀⣿⠉⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣤⠀⠛⣿⣿' +
      '%^^%⠀⠀⠀⠀⣶⣿⠀⠀⠀⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶' +
      '%^^%⠀⠀⠀⠀⠀⣀⣀⠀⣶⣿⣿⠶' +
      '%^^%⣶⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤' +
      '%^^%⠀⠉⠶⣶⣀⣿⣿⣿⣿⣿⣿⣿⠿⣿⣤⣀' +
      '%^^%⠀⠀⠀⣿⣿⠿⠉⣿⣿⣿⣿⣭⠀⠶⠿⠿' +
      '%^^%⠀⠀⠛⠛⠿⠀⠀⣿⣿⣿⣉⠿⣿⠶' +
      '%^^%⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠒' +
      '%^^%⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⠛⣭⣭⠉' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣭⣤⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿⣭' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⠿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⣶⣶⠿⠿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⣭⣶');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀' +
      '%^^%⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀' +
      '%^^%⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣛⣿⣭⣶⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⣶⣿⣶' +
      '%^^%⠀⠀⠀⣿⣿⣿⣀' +
      '%^^%⠀⣀⣿⣿⣿⣿⣿⣿' +
      '%^^%⣶⣿⠛⣭⣿⣿⣿⣿' +
      '%^^%⠛⠛⠛⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⣀⣭⣿⣿⣿⣿⣀' +
      '%^^%⠀⠤⣿⣿⣿⣿⣿⣿⠉' +
      '%^^%⠀⣿⣿⣿⣿⣿⣿⠉' +
      '%^^%⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣶⣿⣿' +
      '%^^%⠉⠛⣿⣿⣶⣤' +
      '%^^%⠀⠀⠉⠿⣿⣿⣤' +
      '%^^%⠀⠀⣀⣤⣿⣿⣿' +
      '%^^%⠀⠒⠿⠛⠉⠿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣀⣿⣿' +
      '%^^%⠀⠀⠀⠀⣶⠿⠿⠛');

  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⣀⣤' +
      '%^^%⠀⠀⠀⠀⣿⠿⣶' +
      '%^^%⠀⠀⠀⠀⣿⣿⣀' +
      '%^^%⠀⠀⠀⣶⣶⣿⠿⠛⣶' +
      '%^^%⠤⣀⠛⣿⣿⣿⣿⣿⣿⣭⣿⣤' +
      '%^^%⠒⠀⠀⠀⠉⣿⣿⣿⣿⠀⠀⠉⣀' +
      '%^^%⠀⠤⣤⣤⣀⣿⣿⣿⣿⣀⠀⠀⣿' +
      '%^^%⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣭⣶⠉' +
      '%^^%⠀⠀⠀⠤⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⣭⣿⣿⣿⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣉⣿⣿⠿⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣿⠀⠀⠀⣿⣿⣤' +
      '%^^%⠀⠀⠀⣀⣿⣿⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣿⣿⣿⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⣿⣿⠛⠀⠀⠀⠉⣿⣿' +
      '%^^%⠀⠀⠀⠉⣿⠀⠀⠀⠀⠀⠛⣿' +
      '%^^%⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⣿' +
      '%^^%⠀⠀⠀⠀⣛⠀⠀⠀⠀⠀⠀⠛⠿⠿⠿' +
      '%^^%⠀⠀⠀⠛⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⣀⣶⣀' +
      '%^^%⠀⠀⠀⠒⣛⣭' +
      '%^^%⠀⠀⠀⣀⠿⣿⣶' +
      '%^^%⠀⣤⣿⠤⣭⣿⣿' +
      '%^^%⣤⣿⣿⣿⠛⣿⣿⠀⣀' +
      '%^^%⠀⣀⠤⣿⣿⣶⣤⣒⣛' +
      '%^^%⠉⠀⣀⣿⣿⣿⣿⣭⠉' +
      '%^^%⠀⠀⣭⣿⣿⠿⠿⣿' +
      '%^^%⠀⣶⣿⣿⠛⠀⣿⣿' +
      '%^^%⣤⣿⣿⠉⠤⣿⣿⠿' +
      '%^^%⣿⣿⠛⠀⠿⣿⣿' +
      '%^^%⣿⣿⣤⠀⣿⣿⠿' +
      '%^^%⠀⣿⣿⣶⠀⣿⣿⣶' +
      '%^^%⠀⠀⠛⣿⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⣉⣿⠀⣿⣿' +
      '%^^%⠀⠶⣶⠿⠛⠀⠉⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⠀⠀⠀⣶⣿⠿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿' +
      '%^^%⠀⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⣀' +
      '%^^%⠀⠿⣿⣿⣀' +
      '%^^%⠀⠉⣿⣿⣀' +
      '%^^%⠀⠀⠛⣿⣭⣀⣀⣤' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⠛⠿⣶⣀' +
      '%^^%⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣉⣶' +
      '%^^%⠀⠀⠉⣿⣿⣿⣿⣀⠀⠀⣿⠉' +
      '%^^%⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⣿⣿⣿⠿⠉⣿⣿⣿⣿' +
      '%^^%⠀⣿⣿⠿⠀⠀⣿⣿⣿⣿' +
      '%^^%⣶⣿⣿⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠛⣿⣿⣀⠀⠀⠀⣿⣿⣿⣿⣶⣀' +
      '%^^%⠀⣿⣿⠉⠀⠀⠀⠉⠉⠉⠛⠛⠿⣿⣶' +
      '%^^%⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉' +
      '%^^%⣀⣶⣿⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣶⣿⣿⣿⣶⣶⣤⣶⣶⠶⠛⠉⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⣤⣿⠿⣿⣿⣿⣿⣿⠀⠀⠉' +
      '%^^%⠛⣿⣤⣤⣀⣤⠿⠉⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠉⣿⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣛⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠛⠿⣿⣿⣿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⠛⠉⠀⠀⠀⠛⠿⣿⣿⣶⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠛⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⣤⣶⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣀⣀' +
      '%^^%⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⣤⣶⣀⠿⠶⣿⣿⣿⠿⣿⣿⣿⣿' +
      '%^^%⠉⠿⣿⣿⠿⠛⠉⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠉⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣤⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣀⣿⣿⣿⠿⠉⠀⠀⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣿⠿⠉⠀⠀⠀⠀⠿⣿⣿⠛' +
      '%^^%⠀⠀⠀⠀⠛⣿⣿⣀⠀⠀⠀⠀⠀⣿⣿⣀' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠉⣿⣿⠀⠀⠀⠀⠀⠀⠉⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣀⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿⣿' +
      '%^^%⠀⠀⠀⠀⠤⣿⠿⠿⠿');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⣀' +
      '%^^%⠀⠀⣶⣿⠿⠀⠀⠀⣀⠀⣤⣤' +
      '%^^%⠀⣶⣿⠀⠀⠀⠀⣿⣿⣿⠛⠛⠿⣤⣀' +
      '%^^%⣶⣿⣤⣤⣤⣤⣤⣿⣿⣿⣀⣤⣶⣭⣿⣶⣀' +
      '%^^%⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⠛⠿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠀⣿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣶⣿⠛⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠀⠀⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⣶⣿⣶' +
      '%^^%⠀⠀⠀⣤⣤⣤⣿⣿⣿' +
      '%^^%⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣶' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⣿⣉⣿⣿⣿⣿⣉⠉⣿⣶' +
      '%^^%⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿' +
      '%^^%⠀⣤⣿⣿⣿⣿⣿⣿⣿⠿⠀⣿⣶' +
      '%^^%⣤⣿⠿⣿⣿⣿⣿⣿⠿⠀⠀⣿⣿⣤' +
      '%^^%⠉⠉⠀⣿⣿⣿⣿⣿⠀⠀⠒⠛⠿⠿⠿' +
      '%^^%⠀⠀⠀⠉⣿⣿⣿⠀⠀⠀⠀⠀⠀⠉' +
      '%^^%⠀⠀⠀⣿⣿⣿⣿⣿⣶' +
      '%^^%⠀⠀⠀⠀⣿⠉⠿⣿⣿' +
      '%^^%⠀⠀⠀⠀⣿⣤⠀⠛⣿⣿' +
      '%^^%⠀⠀⠀⠀⣶⣿⠀⠀⠀⣿⣶' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠉');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶' +
      '%^^%⠀⠀⠀⠀⠀⣀⣀⠀⣶⣿⣿⠶' +
      '%^^%⣶⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤' +
      '%^^%⠀⠉⠶⣶⣀⣿⣿⣿⣿⣿⣿⣿⠿⣿⣤⣀' +
      '%^^%⠀⠀⠀⣿⣿⠿⠉⣿⣿⣿⣿⣭⠀⠶⠿⠿' +
      '%^^%⠀⠀⠛⠛⠿⠀⠀⣿⣿⣿⣉⠿⣿⠶' +
      '%^^%⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠒' +
      '%^^%⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣿⠛⣭⣭⠉' +
      '%^^%⠀⠀⠀⠀⠀⣿⣿⣭⣤⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿⣭' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⠿⣶⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⣶⣶⠿⠿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⣿⠛' +
      '%^^%⠀⠀⠀⠀⠀⠀⣭⣶');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀' +
      '%^^%⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀' +
      '%^^%⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣛⣿⣭⣶⣀' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿' +
      '%^^%⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛');
  await sleep(waitTimeMs);
  bot.sendChatMsg(
      '%^^%%^^%%^^%%^^%%^^%%^^%%^^%⠀⠀⠀⣶⣿⣶' +
      '%^^%⠀⠀⠀⣿⣿⣿⣀' +
      '%^^%⠀⣀⣿⣿⣿⣿⣿⣿' +
      '%^^%⣶⣿⠛⣭⣿⣿⣿⣿' +
      '%^^%⠛⠛⠛⣿⣿⣿⣿⠿' +
      '%^^%⠀⠀⠀⠀⣿⣿⣿' +
      '%^^%⠀⠀⣀⣭⣿⣿⣿⣿⣀' +
      '%^^%⠀⠤⣿⣿⣿⣿⣿⣿⠉' +
      '%^^%⠀⣿⣿⣿⣿⣿⣿⠉' +
      '%^^%⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣶⣿⣿' +
      '%^^%⠉⠛⣿⣿⣶⣤' +
      '%^^%⠀⠀⠉⠿⣿⣿⣤' +
      '%^^%⠀⠀⣀⣤⣿⣿⣿' +
      '%^^%⠀⠒⠿⠛⠉⠿⣿' +
      '%^^%⠀⠀⠀⠀⠀⣀⣿⣿' +
      '%^^%⠀⠀⠀⠀⣶⠿⠿⠛');
});

COMMANDS.set('nomods', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.NO_MODS.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$nomods is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠄⣶⣶⣶⣶⣝⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⢀' +
      '%^^%⣸⣧⣄⣰⠆⢙⠳⡹⣿⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⢸' +
      '%^^%⣿⣿⣿⣽⣂⣈⣁⣌⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⢀⣀⣾' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢩⡅⠄⠄⠄⠄⠄⠄⠄⣤⣿' +
      '%^^%⠰⢿⣿⣯⣽⣿⣿⣿⡿⠁⠄⠈⠁⠄⠄⠄⣠⣶⣶⣾' +
      '%^^%⣤⡀⠈⠛⣿⣟⢿⣿⡇⠄⢠⣼⣷⣦⠄⢸' +
      '%^^%⣿⣷⣾⣶⣿⡌⠄⠄⠄⠄⠈⠛⠿⠟⣴⣿' +
      '%^^%⣿⣿⣿⣿⣿⣧⣤⠄⠄⠄⠄⢀⣤⣿' +
      '%^^%⠿⢿⣿⣿⣿⠋⠄⢀⣠⣶⣿⠟⠿⠿⣿⠿⠿⠿⣿' +
      '%^^%⣤⣄⠈⠉⠁⣠⣴⣿⣿⣿⣿⠄⣾⠄⡇⠄⣿⠄⢸' +
      '%^^%⣉⣡⣤⣾⣿⣿⣿⣿⣿⣿⣿⣶⣿⣶⣿⣶⣶⣶⣿' +
      '%^^%⣿⡿⠿⠿⠿⠿⠿⢿⣿⠿⠿⠿⣿⡿⠿⠿⠉⢹⡿⠿⠿⣿' +
      '%^^%⣿⡇⠄⣾⠄⢰⡆⠄⡇⠄⣿⠄⢸⡇⠰⡷⠄⢸⡤⢈⠄⢻' +
      '%^^%⣿⣷⣶⣿⣶⣾⣷⣶⣿⣶⣶⣶⣿⣷⣶⣶⣶⣾⣶⣶⣶⣾');
});

COMMANDS.set('moderators', async (bot, username, msg) => {
  const price = 1000;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.MODS_SMELL_BAD.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$mods is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⣿⣿⢿⣿⢿⣷⡾⠿⠿⣿⠿⠿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿' +
      '%^^%⣿⡇⡄⠇⡄⣿⢰⣿⡷⢸⠄⣷⡎⢻⣄⣙⡛⣿⣿⣿⣿⣿' +
      '%^^%⣿⣤⣷⣼⣧⣼⣦⣭⣴⣿⣦⣭⣴⣷⣤⣥⣶⣿⣿⣿⣿⣿' +
      '%^^%⣿⠛⠭⢭⣽⡿⠉⢿⠋⢹⣿⠠⠤⠤⡏⢹⣿⣿⠉⣿⣿⣿' +
      '%^^%⣟⠓⠖⢒⣸⠃⣴⠄⣼⡀⢿⠰⠶⠾⡇⠸⠟⢛⠄⠿⠛⣻' +
      '%^^%⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⠄⠶⠂⣹⣿⡿⢋⡀⢿⣿⠄⣦⣬⡙⢿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣀⣛⣃⣼⣏⣠⣶⣦⣈⣿⣀⠛⢛⣡⣾⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⠉⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣍⠙⠟⢋⣨⣿⠄⣿⣷⣦⡈⢹⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⡟⢋⣡⣄⡉⢻⡏⠄⠿⠿⠟⢁⣼⣿⣿⣿⣿⣿⣿⣿⣿' +
      '%^^%⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿');
});

COMMANDS.set('onion', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.ONION.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$onion is on cooldown');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%░░░░░░░░░▄██▄▄' +
      '%^^%░░░░░▄█▀▀█░▐░░▌' +
      '%^^%░░░░░░░░░█░▌' +
      '%^^%░░░░░░░░█░░█' +
      '%^^%░░░░░░░▄█░░░▀█' +
      '%^^%░░░░░▄█░░░░░░░▀█' +
      '%^^%░░░░█░░░░░░░░░░░▀█' +
      '%^^%░░░█░░░░░░░░░░░░░░▀█' +
      '%^^%░░█░░ EYEBALL ░░░░░ EYEBALL ░░░█' +
      '%^^%░█░░░░░░░░░░░░░░░░░░░█▌' +
      '%^^%█░░░░░░░░░░░░░░░░░░░░██' +
      '%^^%█░░░█▀█▄▄▄▄▄▄▄▄▄█▀▌░░█▌' +
      '%^^%░█░░░▌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀█░░█' +
      '%^^%░░█░░▀█▄▄▄▄▄▄▄▄▄█░░█▀' +
      '%^^%░░░█░░░░░░░░░░░░░▄█' +
      '%^^%░░░░█▄░░░░░░░░▄█' +
      '%^^%░░░░░░░▀██████▀' +
      '%^^%░░░░░░░░░░▀▀');
});

COMMANDS.set('true', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.TRUE.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$true is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      `True aaaaaaaaaaaand... Yeah, that's pretty true. That's true and- yeah that's` +
      `That's true. true. That's true. That's true- That's pretty true. That's ` +
      `pretty true, I mean-...  Yeah. That's true. Uhm- That's true. ` +
      `That's firetruckin' true. Uhm... That's how it is dude. FeelsDankMan`);
});

COMMANDS.set('trikool', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.TRIKOOL.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$trikool is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^% ⠀⠀⠀⠀⠀⠀⠀ TriKool TriKool TriKool %^^% ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀ TriKool %^^% ' +
      '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ TriKool %^^% ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ TriKool %^^% ⠀⠀⠀⠀⠀⠀⠀⠀  TriKool ');
});

COMMANDS.set('peped', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.PEPED.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$peped is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD %^^% ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD pepeD %^^%' +
      ' ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD pepeD pepeD %^^% ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD pepeD pepeD pepeD %^^%' +
      ' ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD pepeD pepeD pepeD pepeD %^^% ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ pepeD pepeD pepeD pepeD pepeD' +
      ' pepeD %^^% ⠀⠀⠀⠀⠀⠀⠀ ⠀ pepeD pepeD pepeD pepeD pepeD pepeD pepeD');
});

COMMANDS.set('miau', async (bot, username, msg) => {
  if (!Limiters.MIAU.tryRemoveTokens(1)) {
    return bot.sendPm(username, '$miau is on cooldown.');
  }
  const user = msg.split(' ')[0];
  if (user === '') {
    bot.sendChatMsg('https://dl.dropboxusercontent.com/s/7aosou7ecuywquo/miau.gif meow~');
    return;
  } else {
    bot.sendChatMsg(`https://dl.dropboxusercontent.com/s/7aosou7ecuywquo/miau.gif ${user} meow~`);
  }
});

COMMANDS.set('breathingexcercise', async (bot, username, msg) => {
  const price = 1000;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.BE.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$breathingexcersise is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      `WeirdChamp START MANUAL BREATHING WeirdChamp START MANUAL BREATHING ` +
      `WeirdChamp START MANUAL BREATHING WeirdChamp START MANUAL BREATHING WeirdChamp START ` +
      `MANUAL BREATHING WeirdChamp START MANUAL BREATHING WeirdChamp START MANUAL BREATHING ` +
      `WeirdChamp START MANUAL BREATHING WeirdChamp START MANUAL BREATHING WeirdChamp`);
  await sleep(20000);
  bot.sendChatMsg(
      `OkayChamp STOP MANUAL BREATHING OkayChamp STOP MANUAL BREATHING OkayChamp` +
      ` STOP MANUAL BREATHING OkayChamp STOP MANUAL BREATHING OkayChamp STOP MANUAL BREATHING ` +
      `OkayChamp STOP MANUAL BREATHING OkayChamp STOP MANUAL BREATHING OkayChamp STOP MANUAL ` +
      `BREATHING OkayChamp STOP MANUAL BREATHING OkayChamp STOP MANUAL BREATHING `);
});

let mogusActive = false;

COMMANDS.set('startamongus', async (bot, username, msg) => {
  const price = 1000;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.STARTMOGUS.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$startamongus is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  mogusActive = true;

  bot.sendChatMsg(
      `${username} has started a game of Among Us.  Type $joingame` +
      ` to join. The game will start in 30 seconds and you will be assigned your role/tasks.`);
  await sleep(30000);
  bot.sendChatMsg('Not enough users joined the game FeelsBadMan');
  mogusActive = false;
});

COMMANDS.set('joingame', async (bot, username, msg) => {
  if (mogusActive === true) {
    bot.sendPm(username, 'Successfully joined game!');
    await sleep(30000);
    bot.sendPm(username, ':tf:');
  } else {
    return bot.sendPm(username, 'There is currently no active game guraDank');
  }
});

COMMANDS.set('02', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.OTWO.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$02 is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠄⣩⣵⣿⣿⢹⣿⢃⢳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⣿⣧⣝⢻⡝⣿⣿' +
      '%^^%⣾⡻⡃⣿⣿⠸⢣⣾⢸⡸⣿⣿⢹⣿⣿⣿⠘⣿⣿⣿⢈⣿⢸⣿⣷⣭⣿⣿' +
      '%^^%⠃⣾⠃⣿⡏⢇⣮⣟⠸⡇⣿⣿⢸⠿⣿⣿⣤⢿⣿⣿⢸⢹⡆⡟⣸⣿⡟⣿' +
      '%^^%⢰⣿⠄⣿⡇⡜⠛⠛⠿⢤⢹⣿⣼⢀⣿⡏⠿⠄⣿⠟⣰⣦⢧⢱⣿⣿⠳⣿' +
      '%^^%⡜⣿⡆⣿⡇⣿⣿⣷⣶⣾⣦⣄⣧⣸⡸⢧⣿⡨⠩⠦⠿⠿⡼⢸⣿⡿⣄⢈' +
      '%^^%⠹⣿⡇⣿⡇⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣶⣶⣶⣶⣶⣶⡆⣿⣿⢇⡟⣼' +
      '%^^%⠄⢹⡇⣿⡇⣿⣿⣿⣿⣿⣿⣧⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⢘⣾⣿' +
      '%^^%⠄⠈⡇⣿⡇⣹⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⡟⣾⣿⣿' +
      '%^^%⠄⠄⢠⣿⡇⣷⠘⢿⣿⣧⡲⣾⣭⣭⣿⣒⠊⣹⣿⣿⡿⠁⣸⣿⡇⣿⣿⡏' +
      '%^^%⠄⠄⠄⣿⡇⣿⠄⠄⠙⢿⣿⣷⣶⣶⣶⣾⣿⣿⠟⠋⠄⠄⣿⣿⢳⣿⣿⢹' +
      '%^^%⠄⠄⠄⠘⣿⢸⢰⣆⠄⠄⠙⠻⣿⡿⠟⠛⠉⠄⠄⠄⠄⠄⣿⡟⣼⣿⢏⣿');
});

COMMANDS.set('ankha', async (bot, username, msg) => {
  const price = 100;
  const currentPoints = await bot.db.getUserPoints(username);
  if (currentPoints < price) {
    bot.sendPm(username, `You don't have enough points for this command(${price})`);
    return;
  } else {
    if (!Limiters.ANKHA.tryRemoveTokens(1)) {
      return bot.sendPm(username, '$ankha is on cooldown.');
    } else {
      await bot.db.updateUserPoints(username, -price);
    }
  }

  bot.sendChatMsg(
      '%^^%⠀⠀⠀⠀⠀⠀⠠⣾⡟⢿⣦⡀⡀⣿⠃⠙⣿⣦⠂⢉⡐⡀' +
      '%^^%⠀⠀⠀⣀⠀⠀⣸⣿⠀⠘⣿⡾⢽⡿⠀⠀⠘⣿⣆⠐⣷⢢' +
      '%^^%⠐⠁⠀⡤⢸⢠⣿⠇⠀⠀⣛⣧⣾⡇⠀⠀⠀⠹⣿⣖⣛⣻' +
      '%^^%⠀⠀⠀⢧⢸⣜⣆⢀⠔⠞⢋⣿⣿⣷⣶⣦⣤⣄⣹⣿⣯⡽' +
      '%^^%⠀⠄⠀⣊⣸⣷⣀⠁⣠⣲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀' +
      '%^^%⠀⠈⢠⣾⣿⣿⣿⣤⣽⣿⡿⠇⠹⠟⠛⠛⣛⠛⠛⢿⣿⣷⡀' +
      '%^^%⠀⢠⣿⣿⣿⠹⠛⠋⠁⠀⠀⢀⠊⠀⠀⣀⣀⢡⠀⢸⡏⠙⢃' +
      '%^^%⢀⣿⣿⡏⠃⠀⠀⠑⡄⠀⠀⢄⣶⣿⣦⠀⣀⢼⣠⣾⣧⣤⣈⡆' +
      '%^^%⠘⡹⣿⠰⡒⣲⣿⣯⠧⠀⠀⠊⠉⠉⠁⠀⠀⠀⢠⣿⠙⠛⠿⡇' +
      '%^^%⠀⠀⣿⠠⠋⠉⠁⠀⢠⠊⠉⠒⠀⠀⠀⠀⠀⠀⣾⣏⣀' +
      '%^^%⠀⡾⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢛⣿⣿⣶⡄' +
      '%^^%⠀⠁⢠⣿⣷⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣾⣿⣿⡿⠋' +
      '%^^%⠀⠐⢿⣿⣿⣿⣿⣶⣶⣦⣤⡶⠀⠀⠸⠟⠛⠻⣿⣅');
});

// COMMANDS.set('temp', async (bot, username, msg) => {
//   const price = 100;
//   const currentPoints = await bot.db.getUserPoints(username);
//   if (currentPoints < price) {
//     bot.sendPm(username, `You don't have enough points for this command(${price})`);
//     return;
//   } else {
//     if (!Limiters.OTWO.tryRemoveTokens(1)) {
//       return bot.sendPm(username, '$02 is on cooldown.');
//     } else {
//       await bot.db.updateUserPoints(username, -price);
//     }
//   }

//   bot.sendChatMsg('');
// });
