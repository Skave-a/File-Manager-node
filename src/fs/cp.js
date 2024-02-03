import fs from 'fs';
import path from 'path';
import log from '../utils/log.js';

export const cp = async (curDir, file, secondfile) => {

  const pathFile = path.join(curDir, file);
  try {
    const copyFile = path.join(curDir, secondfile);

    const readStream = fs.createReadStream(pathFile);
    const writeStream = fs.createWriteStream(copyFile);
  
    readStream.pipe(writeStream);
  } catch (err) {
    log.red(err.message);
    log.blue('Invalid command');
  }
};