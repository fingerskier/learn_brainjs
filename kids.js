const brain = require('brain.js')
const fs = require('fs')
const model = require('./kid_model.json')
const net = new brain.recurrent.LSTM()

const places = require('./places.json')

net.fromJSON(model)

const trainingData = [
    'Jane saw Doug.',
    'Doug saw Jane.',
    'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
    'Spot saw Doug and Jane looking at each other.',
    'Doug hugged Spot.',
    'Spot yelped for help.',
    'Jane took Spot to the dog park.',
    'Spot hurt his paw.',
    'Jane took Spot to the vet.',
];

net.train(places, {
    iterations: 100,
    errorThresh: 0.001,
});


console.log(`Jane ${net.run('Jane')}`)
console.log(`Doug ${net.run('Doug')}`)
console.log(`Spot ${net.run('Spot')}`)

fs.writeFileSync('kid_model.json', JSON.stringify(net.toJSON()))
