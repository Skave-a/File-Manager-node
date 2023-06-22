import fs from 'fs';
import path from 'path';

export const add = async (curDir, file) => {

  const pathFile = path.join(curDir, file);

  fs.writeFile(pathFile, '', (err) => {
    if (err) {
      console.error('Operation failed!');
    }
  })

};