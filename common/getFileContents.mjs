import fs from 'node:fs/promises';

export const getFileContents = async (filePath) => {
    try {
        return await fs.readFile(filePath, {encoding: 'utf8'});
    } catch (error) {
        throw new Error(`Failed to read file: ${filePath}. \nError message: ${error.message}`);
    }
}