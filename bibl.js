console.time("net_train")

const fs = require('fs')
const brain = require('brain.js')
const model = require('./model.json')
const trainingData = require('./bible.json')

const net = new brain.recurrent.LSTM();
net.fromJSON(model)

for (let J=0; J < 262; J++) {
    let trainingSubset = []
    
    for (let I=0; I < 100; I++) {
        let index = Math.random() * 31096
        
        trainingSubset.push(trainingData[I])
    }
    
    net.train(trainingSubset, {
        iterations: 10,
        errorThresh: 0.011,
        log: (stats)=>console.info(stats)
    });
    
    console.log(net.run('He is'))
    console.log(net.run('I was'))
    
    fs.writeFileSync('./model.json', JSON.stringify(net.toJSON()))
}

console.timeEnd("net_train")
