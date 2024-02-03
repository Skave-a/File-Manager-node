import fs from 'fs';
import path from 'path';

export const mv = async (curDir, file, targetDir) => {
  const sourcePath = path.join(curDir, file);

  try {
    
    const newName = path.join(curDir, secondfile);
    await fs.promises.access(newName);
    console.log(`File ${secondfile} already exists`);
    return;
  } catch (error) {
    try {
      await fs.promises.access(sourcePath);
      const targetPath = path.join(targetDir, file);

      const readStream = fs.createReadStream(sourcePath);
      const writeStream = fs.createWriteStream(targetPath);

      readStream.pipe(writeStream);

      writeStream.on('finish', async () => {
        await fs.promises.unlink(sourcePath);
      });
    } catch (err) {
      console.log(err.message);
      console.log('Invalid command');
    }
  }
};
