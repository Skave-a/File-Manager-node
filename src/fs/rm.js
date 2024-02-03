import fs from 'fs';
import path from 'path';

export const rm = async (curDir, file) => {

    try {
      const pathFile = path.join(curDir, file);
      await fs.promises.unlink(pathFile);
    } catch (err) {
      console.log(err.message);
      console.log('Invalid command');
    }
};