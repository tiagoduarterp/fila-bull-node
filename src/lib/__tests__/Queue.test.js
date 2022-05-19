jest.mock('bull');

const Queue = require("bull");

describe('Queue properties and functions', () => {
    test('queue object', () => {
        const redisConfig = {
            host: "localhost",
            port: "5687",
        }

        const queues = Object.values(["Teste Jobs"]).map(job => ({
            bull: new Queue(job, redisConfig),
        }))
        const queueBeCorrectly = [{ bull: new Queue("Teste Jobs", redisConfig) }];
        expect(JSON.stringify(queues)).toStrictEqual(JSON.stringify(queueBeCorrectly));
    });
});

