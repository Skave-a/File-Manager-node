import { createReadStream } from 'fs';
import path from 'path';
import { curDir as dir } from '../utils/curDir.js';

export const cat = (curDir, file) => {
  
  const pathFile = path.join(curDir, file);

  const readableStream = createReadStream(pathFile);

  readableStream.on('data', (data) => {
    console.log(data.toString());
    readableStream.destroy();
  });
  
  readableStream.on('close', () => {
    dir(curDir);
  });
  return curDir;
};