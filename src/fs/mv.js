import fs from 'fs';
import path from 'path';

export const mv = async (curDir, file, secondfile) => {

  const pathOld = path.join(curDir, file);
  const pathNew = path.join(curDir, secondfile);

  const readStream = fs.createReadStream(pathOld);
  const writeStream = fs.createWriteStream(pathNew);

  readStream.pipe(writeStream);

  writeStream.on('finish', async () => {
    try {
      await fs.promises.unlink(pathOld);
    } catch (err) {
      throw new Error(errorText);
    }
    });

};