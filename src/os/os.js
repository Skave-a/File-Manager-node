import os from 'os';

export const osFn = (flag) => {
  
  switch (flag) {
    case '--EOL':
      console.log(`System end-of-line: ${JSON.stringify(os.EOL)}`);
      break;
    case '--cpus':
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);
      cpus.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model} @ ${cpu.speed}GHz`);
      });
      break;
    case '--homedir':
      console.log(`Home directory: ${os.homedir()}`);
      break;
    case '--username':
      console.log(`Current user: ${os.userInfo().username}`);
      break;
    case '--architecture':
      console.log(`CPU architecture: ${os.arch()}`);
      break;
    default:
      console.log('Invalid argument. Usage: os --EOL | --cpus | --homedir | --username | --architecture');
    };

};
