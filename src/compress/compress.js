import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

export const compress = async (curDir, file, secondfile) => {

  const cm = path.join(curDir, file);
  const decm = path.join(curDir, secondfile);

  const readStream = fs.createReadStream(cm);
  const writeStream = fs.createWriteStream(decm);

  const brotli = zlib.createBrotliCompress();

  readStream.on('error', (err) => {
    console.log(err);
  });

  writeStream.on('error', (err) => {
    console.log(err);
  });

  readStream.pipe(brotli).pipe(writeStream);
}
