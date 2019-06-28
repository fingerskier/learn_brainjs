const trainingData = []

for (let I=0; I < 10; I++) {
    let thisn = Math.round(Math.random() * 100)

    let item = [thisn, thisn+1, thisn+2, thisn+3, thisn+4]

    trainingData.push(item)
}

const net = new brain.recurrent.LSTMTimeStep()

const stats = net.train(trainingData, {
    log: (status)=>{console.log(status)}
})

console.log(stats)

console.log(net.run([1,2,3,4]))
console.log(net.run([5,4,3,2]))