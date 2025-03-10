import fs from 'node:fs/promises';
import {getFileContents} from "../common/getFileContents.mjs";

const filesNumber = await getFileContents("instructions.txt");

for (let i = 0; i < filesNumber; i++) {
    const fileName = `${i}.txt`;
    const fileContent = `File ${i}`;

    await fs.writeFile(fileName, fileContent);
}

console.log(`Successfully created ${filesNumber} files`);