import fs from 'node:fs/promises';

async function getFileContents(filePath) {
    try {
        return await fs.readFile(filePath, {encoding: 'utf8'});
    } catch (error) {
        throw new Error(`Failed to read file: ${filePath}. \nError message: ${error.message}`);
    }
}

async function main() {
    try {
        const instructions = (await getFileContents('instructions.txt')).split(' ');
        if (instructions.length !== 2) {
            console.log('Invalid instructions.txt format: expected exactly two file names (source and destination).')
            process.exit(1);
        }
        const sourceFileName = instructions[0];
        const destinationFileName = instructions[1];

        const sourceFileContent = await getFileContents(sourceFileName);
        // fs.writeFile creates a new file if it does not exist yet
        await fs.writeFile(destinationFileName, sourceFileContent);
        console.log('File content copied from source to destination files.')
    } catch (error) {
        console.error(error);
    }
}

main();