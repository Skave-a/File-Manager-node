import fs from "fs";
import path from "path";
import log from "../utils/log.js";

export const cp = async (curDir, file, secondfile) => {
  try {
    const sourcePath = path.join(curDir, file);
    const targetPath = path.join(curDir, secondfile);

    const sourceStats = await fs.promises.stat(sourcePath);
    if (sourceStats.isDirectory()) {
      log.red(`"${file}" is a directory. Cannot copy directories.`);
      log.blue("Invalid command");
      return;
    }

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);

    readStream.pipe(writeStream);
  } catch (err) {
    log.red(err.message);
    log.blue("Invalid command");
  }
};
