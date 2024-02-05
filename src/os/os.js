import os from 'os';
import log from '../utils/log.js';

export const osFn = (flag) => {
  
  switch (flag) {
    case '--EOL':
      log.magenta(`System end-of-line: ${JSON.stringify(os.EOL)}`);
      break;
    case '--cpus':
      const cpus = os.cpus();
      log.magenta(`Total CPUs: ${cpus.length}`);
      cpus.forEach((cpu, index) => {
        log.magenta(`CPU ${index + 1}: ${cpu.model} @ ${cpu.speed/1000}GHz`);
      });
      break;
    case '--homedir':
      log.magenta(`Home directory: ${os.homedir()}`);
      break;
    case '--username':
      log.magenta(`Current user: ${os.userInfo().username}`);
      break;
    case '--architecture':
      log.magenta(`CPU architecture: ${os.arch()}`);
      break;
    default:
      log.red('Invalid argument. Usage: os --EOL | --cpus | --homedir | --username | --architecture');
    };

};
