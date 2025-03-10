import { getFileContents } from '../common/getFileContents.mjs';
import fs from 'node:fs/promises';

const filesNumber = await getFileContents('instructions.txt');
const promises = [];

for (let i = 0; i < filesNumber; i++) {
    const fileName = `${i}.txt`;
    const fileContent = `File ${i}`;
    promises.push(fs.writeFile(fileName, fileContent));
}

await Promise.all(promises);
console.log(
    `Successfully created ${filesNumber} files with parallelization used`,
);
