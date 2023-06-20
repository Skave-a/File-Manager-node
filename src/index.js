import { homedir } from 'os';

const userName = process.argv.length > 2 ? process.argv[2].slice(11) : 'incognito';
console.log(`Welcome to the File Manager, ${userName}!`);

let curDir = homedir();
console.log(`You are currently in ${curDir}`);
