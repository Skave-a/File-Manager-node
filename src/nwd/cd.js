import { chdir, cwd } from 'node:process';
import path from 'path';
import log from '../utils/log.js';

export const cd = (curDir, path2) => {
  if (path2 === undefined) return curDir;

  if (curDir.endsWith(':')) {
    path2 = '\\' + path2;
  }

  const cleanedPath = path2.replace(/['"]/g, '');

  let dir;

  try {
    const newPath = path.resolve(curDir, cleanedPath);
    chdir(newPath);
    dir = cwd();
  } catch (err) {
    log.red(err.message);
    log.blue('Invalid command');
    return curDir;
  }
console.log('dir', dir)
  return dir;
};
