const fs = require('fs')
const brain = require('brain.js')
const trainingData = require('./bible.json')

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 10,
    errorThresh: 0.011,
    log: (stats)=>console.info(stats)
});

console.log(net.run('Jane'))
console.log(net.run('It was'))


fs.writeFileSync('./model.json', net.toJSON())
