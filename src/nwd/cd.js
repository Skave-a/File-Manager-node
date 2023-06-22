import { chdir, cwd } from 'node:process';
import  path  from 'path';

export const cd = (curDir, path2) => {
  if (path === undefined ) return curDir;

  let dir;

  try {
    chdir(path.resolve(curDir, path2));
    dir = cwd();
  } catch (err) {
    console.log(err);
    return curDir;
  }
  return dir;
}
