
const Queue = require("bull");

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
}


//import * as jobs from '../jobs';

// const RegistrationMail = require('../jobs').RegistrationMail
// const UserReport = require('../jobs').UserReport

const jobs = require('../jobs');

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}))

//console.log('Teste do ', queues)

module.exports = {
  queues,
  add(name, data) {
    console.log('teste ', this.queues)
    const queue = this.queues.find(queue => queue.name === name);
    
    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });
    })
  }
};