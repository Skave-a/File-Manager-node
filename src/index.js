import { homedir } from 'os';

const userName = process.argv.length > 2 ? process.argv[2].slice(11) : 'incognito';
console.log(`Welcome to the File Manager, ${userName}!`);

let curDir = homedir();
console.log(`You are currently in ${curDir}`);

const FM = () => {
  process.stdin.on('data', data => {

  });
  
  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  })
};

FM();