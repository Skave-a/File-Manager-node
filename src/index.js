import { homedir } from 'os';
import { COMMANDS } from './utils/constants.js';
import { cwd, chdir } from "node:process";
import { up, cd, ls } from './nwd/index.js';

const userName = process.argv.length > 2 ? process.argv[2].slice(11) : 'incognito';
console.log(`Welcome to the File Manager, ${userName}!`);

chdir(homedir());

let curDir = cwd();

console.log(`You are currently in ${curDir}`);


const FM = () => {
  process.stdin.on('data', async data => {
    const commandString = data.toString().trim();
    const command = commandString.toString().split(' ');
        
    switch (command[0]) {
      case COMMANDS.up:
        curDir = up(curDir);
        break;
      case COMMANDS.cd:
        const path = command[1];
        curDir = await cd(curDir, path);
        break;
      case COMMANDS.ls:
        await ls(curDir);
        break;
      case COMMANDS.add:
        // код для команды add
        break;
      case COMMANDS.cat:
        // код для команды cat
        break;
      case COMMANDS.cp:
        // код для команды cp
        break;
      case COMMANDS.mv:
        // код для команды mv
        break;
      case COMMANDS.rm:
        // код для команды rm
        break;
      case COMMANDS.rn:
        // код для команды rn
        break;
      case COMMANDS.os:
        // код для команды os
        break;
      case COMMANDS.hash:
        // код для команды hash
        break;
      default:
        // код, который выполнится, если команда неизвестна
        break;
    }
    console.log(`You are currently in ${curDir}`);
  });
  

  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  })
};

FM();