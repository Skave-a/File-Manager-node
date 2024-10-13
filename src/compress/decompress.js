import path from "path";
import fs from "fs";
import zlib from "zlib";
import log from "../utils/log.js";

export const decompress = async (curDir, file, secondfile) => {
  try {
    const cm = path.join(curDir, file);
    const decm = path.join(curDir, secondfile);

    const readStream = fs.createReadStream(cm);
    const writeStream = fs.createWriteStream(decm);

    const brotli = zlib.createBrotliDecompress();

    readStream.on("error", (err) => {
      log.red(err.message);
      log.blue("Invalid command");
    });

    writeStream.on("error", (err) => {
      log.red(err.message);
      log.blue("Invalid command");
    });

    readStream.pipe(brotli).pipe(writeStream);
  } catch (err) {
    log.red(err.message);
    log.blue("Invalid command");
  }
};
