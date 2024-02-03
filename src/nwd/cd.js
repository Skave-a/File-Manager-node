import { chdir, cwd } from 'node:process';
import path from 'path';
import log from '../utils/log.js';

export const cd = (curDir, path2) => {
  if (path2 === undefined) return curDir;

  if (curDir.endsWith(':')) {
    path2 = '\\' + path2;
  }

  let dir;

  try {
    chdir(path.resolve(curDir, path2));
    dir = cwd();
  } catch (err) {
    log.red(err.message);
    log.blue('Invalid command');
    return curDir;
  }

  return dir;
};
