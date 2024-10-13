import { readdir } from "node:fs/promises";
import log from "../utils/log.js";

export const ls = async (curDir) => {
  const directory = [];
  const filesInDir = [];

  try {
    const files = await readdir(curDir, { withFileTypes: true });

    for await (const file of files) {
      if (file.isFile()) {
        filesInDir.push(file.name);
      } else {
        directory.push(file.name);
      }
    }

    console.table([
      ...directory.map((file) => ({ Name: file, Type: "directory" })),
      ...filesInDir.map((file) => ({ Name: file, Type: "file" })),
    ]);
  } catch (err) {
    log.red(err.message);
    log.blue("Invalid command");
  }
};
