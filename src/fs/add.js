import fs from "fs";
import path from "path";
import log from "../utils/log.js";

export const add = async (curDir, file) => {
  const pathFile = path.join(curDir, file);

  fs.writeFile(pathFile, "", (err) => {
    if (err) {
      log.red(err.message);
      log.blue("Invalid command");
    }
  });
};
