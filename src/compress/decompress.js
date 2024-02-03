import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

export const decompress = async (curDir, file, secondfile) => {

  try {

    const cm = path.join(curDir, file);
    const decm = path.join(curDir, secondfile);
  
    const readStream = fs.createReadStream(cm);
    const writeStream = fs.createWriteStream(decm);
  
    const brotli = zlib.createBrotliDecompress();
  
    readStream.on('error', (err) => {
      console.log(err.message);
      console.log('Invalid command');
    });
  
    writeStream.on('error', (err) => {
      console.log(err.message);
      console.log('Invalid command');
    });
  
    readStream.pipe(brotli).pipe(writeStream);
  } catch (err) {
    console.log(err.message);
    console.log('Invalid command');
  }
  
}
