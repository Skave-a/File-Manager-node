import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { curDir as dir} from '../utils/index.js';

export const hash = (curDir, file) => {
  
  const pathFile = path.join(curDir, file);
  const hash = crypto.createHash('sha256');
  const fileStream = fs.createReadStream(pathFile);

  fileStream.on('data', (data) => {
    hash.update(data);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`Hash - ${fileHash}`);
    dir(curDir);
  });

  fileStream.on('error', (err) => {
    console.log(err);
  });

};
