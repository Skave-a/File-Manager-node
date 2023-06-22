import fs from 'fs';
import path from 'path';

export const rn = async (curDir, file, secondfile) => {

  const oldName = path.join(curDir, file);
  const newName = path.join(curDir, secondfile);

  fs.rename(oldName, newName, (err) => {
    if (err) throw err;
  });

};