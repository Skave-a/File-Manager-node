import fs from "fs";
import path from "path";
import log from "../utils/log.js";

export const mv = async (curDir, file, targetDir) => {
  const sourcePath = path.join(curDir, file);

  try {
    const sourceStats = await fs.promises.stat(sourcePath);
    if (sourceStats.isDirectory()) {
      log.red(`"${file}" is a directory. Cannot move directories.`);
      log.blue("Invalid command");
      return;
    }
  } catch (error) {
    log.red(`File ${file} does not exist`);
    return;
  }

  try {
    const newName = path.join(targetDir, file);
    const targetDirExists = await fs.promises
      .access(targetDir)
      .then(() => true)
      .catch(() => false);
    if (!targetDirExists) {
      log.red(`Target directory ${targetDir} does not exist`);
      return;
    }

    const targetPath = path.join(targetDir, file);

    const targetFileExists = await fs.promises
      .access(targetPath)
      .then(() => true)
      .catch(() => false);
    if (targetFileExists) {
      log.red(`File ${newName} already exists`);
      return;
    }

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);

    readStream.pipe(writeStream);

    writeStream.on("finish", async () => {
      await fs.promises.unlink(sourcePath);
    });
  } catch (err) {
    log.red(err.message);
    log.blue("Invalid command");
  }
};
