import fs from "fs";
import path from "path";
import log from "../utils/log.js";

export const rn = async (curDir, file, secondfile) => {
  const oldName = path.join(curDir, file);

  try {
    const newName = path.join(curDir, secondfile);
    await fs.promises.access(newName);
    console.log(`File ${secondfile} already exists`);
    return;
  } catch (error) {
    try {
      const newName = path.join(curDir, secondfile);
      await fs.promises.rename(oldName, newName);
    } catch (err) {
      log.red(err.message);
      log.blue("Invalid command");
    }
  }
};
