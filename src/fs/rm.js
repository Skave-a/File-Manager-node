import fs from 'fs';
import path from 'path';
import log from '../utils/log.js';

export const rm = async (curDir, file) => {

    try {
      const pathFile = path.join(curDir, file);
      await fs.promises.unlink(pathFile);
    } catch (err) {
      log.red(err.message);
      log.blue('Invalid command');
    }
};