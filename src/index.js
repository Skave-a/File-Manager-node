import { homedir } from 'os';
import { COMMANDS } from './utils/constants';

const userName = process.argv.length > 2 ? process.argv[2].slice(11) : 'incognito';
console.log(`Welcome to the File Manager, ${userName}!`);

let curDir = homedir();
console.log(`You are currently in ${curDir}`);

const FM = () => {
  process.stdin.on('data', data => {
    const dataStringified = data.toString();
    const command = dataStringified.toString().split(' ')[0];

    switch (command) {
      case COMMANDS.up:
        // код для команды up
        break;
      case COMMANDS.cd:
        // код для команды cd
        break;
      case COMMANDS.ls:
        // код для команды ls
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
  });
  
  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  })
};

FM();