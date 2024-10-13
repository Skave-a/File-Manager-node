import { chdir, cwd } from "node:process";
import { homedir } from "os";
import { compress, decompress } from "./compress/index.js";
import { add, cat, cp, mv, rm, rn } from "./fs/index.js";
import { hash } from "./hash/hash.js";
import { cd, ls, up } from "./nwd/index.js";
import { osFn as os } from "./os/os.js";
import { COMMANDS, curDir as dir, exit } from "./utils/index.js";
import log from "./utils/log.js";

const userName =
  process.argv.length > 2 ? process.argv[2].slice(11) : "incognito";
log.yellow(`Welcome to the File Manager, ${userName}!`);

chdir(homedir());

let curDir = cwd();

dir(curDir);

const FM = () => {
  process.stdin.on("data", async (data) => {
    const commandString = data.toString().trim();
    const command = commandString.toString().match(/['"][^'"]+['"]|\S+/g);

    const file = command[1];
    const secondfile = command[2];

    switch (command[0]) {
      case COMMANDS.exit:
        exit(userName);
        break;
      case COMMANDS.up:
        curDir = up(curDir);
        break;
      case COMMANDS.cd:
        curDir = await cd(curDir, file);
        break;
      case COMMANDS.ls:
        await ls(curDir);
        break;
      case COMMANDS.add:
        await add(curDir, file);
        break;
      case COMMANDS.cat:
        cat(curDir, file);
        break;
      case COMMANDS.cp:
        await cp(curDir, file, secondfile);
        break;
      case COMMANDS.mv:
        await mv(curDir, file, secondfile);
        break;
      case COMMANDS.rm:
        await rm(curDir, file);
        break;
      case COMMANDS.rn:
        await rn(curDir, file, secondfile);
        break;
      case COMMANDS.os:
        os(file);
        break;
      case COMMANDS.hash:
        hash(curDir, file);
        break;
      case COMMANDS.compress:
        await compress(curDir, file, secondfile);
        break;
      case COMMANDS.decompress:
        await decompress(curDir, file, secondfile);
        break;
      default:
        log.blue("Invalid command");
        break;
    }
    log.green(`You are currently in ${curDir}`);
  });

  process.on("SIGINT", () => {
    exit(userName);
  });
};

FM();
