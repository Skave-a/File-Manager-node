import fs from 'fs';
import path from 'path';

export const rm = async (curDir, file) => {

  const pathFile = path.join(curDir, file);

    try {
      await fs.promises.unlink(pathFile);
    } catch (err) {
      throw new Error(errorText);
    }

};