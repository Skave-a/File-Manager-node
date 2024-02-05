import log from '../utils/log.js';

export const exit = (userName) => {
  log.blue(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}