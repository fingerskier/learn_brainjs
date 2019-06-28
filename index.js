const brain = require('brain.js')
const fs = require('fs')

const net = new brain.recurrent.LSTMTimeStep()

const model = require('./model.json')
net.fromJSON(JSON.parse(model))

function randint() {
    return Math.round(Math.random() * 100)
}

net.train([[1,2,3,4]])


for (let I = 0; I < 10; I++) {
    X = randint()

    net.train([[X, X+1, X+2, X+3]])
}

Y = randint()

fs.writeFileSync('./model.json', JSON.stringify(net.toJSON()), ()=>{
    console.log(`When Y is ${Y}, yield is ${net.run([[Y, Y+1, Y+2, Y+3]])}`)
})


