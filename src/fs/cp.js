import fs from 'fs';
import path from 'path';

export const cp = async (curDir, file, secondfile) => {

  const pathFile = path.join(curDir, file);
  const copyFile = path.join(curDir, secondfile);

  const readStream = fs.createReadStream(pathFile);
  const writeStream = fs.createWriteStream(copyFile);

  readStream.pipe(writeStream);

};