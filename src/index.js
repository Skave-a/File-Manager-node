import { homedir } from 'os';
import { curDir as dir, COMMANDS, exit } from './utils/index.js';
import { cwd, chdir } from "node:process";
import { up, cd, ls } from './nwd/index.js';
import { cat, add, rn, cp, mv, rm } from './fs/index.js';
import { osFn as os } from './os/os.js';
import { hash } from './hash/hash.js';
import { compress, decompress } from './compress/index.js';

const userName = process.argv.length > 2 ? process.argv[2].slice(11) : 'incognito';
console.log(`Welcome to the File Manager, ${userName}!`);

chdir(homedir());

// для получения текущего рабочего каталога
let curDir = cwd();

dir(curDir);

const FM = () => {
  process.stdin.on('data', async data => {
    const commandString = data.toString().trim();
    const command = commandString.toString().split(' ');
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
        console.log('Invalid command');
        break;
    }
    console.log(`You are currently in ${curDir}`);
  });
  

  process.on('SIGINT', () => {
    exit(userName);
  })
};

FM();