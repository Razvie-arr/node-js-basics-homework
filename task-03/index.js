import http from 'http';
import fs from 'node:fs/promises';

const COUNTER_FILENAME = 'counter.txt';

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    // counter can be negative in my implementation
    switch (req.url) {
        case '/increase':
            await increaseCounter();
            const increasedCounter = await getCounter();
            res.write(
                `Counter successfully increased, new value is ${increasedCounter}`,
            );
            res.statusCode = 200;
            break;
        case '/decrease':
            await decreaseCounter();
            const decreasedCounter = await getCounter();
            res.write(
                `Counter successfully decreased, new value is ${decreasedCounter}`,
            );
            res.statusCode = 200;
            break;
        case '/read':
            const counter = await getCounter();
            res.write(counter.toString());
            res.statusCode = 200;
            break;
        default:
            res.write('Not Found');
            res.statusCode = 404;
            break;
    }

    res.end();
});

server.listen(3000, () => {
    console.log('Server started');
});

const increaseCounter = async () => {
    await modifyCounter((counter) => counter + 1);
};

const decreaseCounter = async () => {
    await modifyCounter((counter) => counter - 1);
};

const modifyCounter = async (modifyOperation) => {
    const counter = await getCounter();
    const newCounterValue = modifyOperation(counter);
    await fs.writeFile(COUNTER_FILENAME, newCounterValue.toString());
};

const getCounter = async () => {
    if (await counterFileExists()) {
        return parseInt(await fs.readFile(COUNTER_FILENAME, 'utf8'));
    } else {
        await fs.writeFile(COUNTER_FILENAME, '0');
        return 0;
    }
};

const counterFileExists = async () => {
    try {
        await fs.access(COUNTER_FILENAME);
        return true;
    } catch (error) {
        return false;
    }
};
