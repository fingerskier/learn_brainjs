const origData = [
        '0+0=0',
    '0+1=1',
    '0+2=2',
    '0+3=3',
    '0+4=4',
    '0+5=5',

    '1+0=1',
    '1+1=2',
    '1+2=3',
    '1+3=4',
    '1+4=5',
    '1+5=6',

    '2+0=2',
    '2+1=3',
    '2+2=4',
    '2+3=5',
    '2+4=6',
    '2+5=7',

    '3+0=3',
    '3+1=4',
    '3+2=5',
    '3+3=6',
    '3+4=7',
    '3+5=8',

    '4+0=4',
    '4+1=5',
    '4+2=6',
    '4+3=7',
    '4+4=8',
    '4+5=9',

    '5+0=5',
    '5+1=6',
    '5+2=7',
    '5+3=8',
    '5+4=9',
    '5+5=10',
]


randDigit = function(){ return Math.floor(Math.random()*10)}

let trainingData = []
let testData = []

for (let I = 0; I < 100; ++I) {
    let d0 = randDigit()
    let d1 = randDigit()

    let ex0 = `${d0}+${d1}=${d0+d1}`

    // console.log(ex0)
    trainingData.push(ex0)
}


const net = new brain.recurrent.LSTM({ hiddenLayer: [20], log:true })

net.fromJSON(JSON.parse(window.localStorage.getItem('model')))

net.train(trainingData, { errorThresh: 0.025 })

for (let I = 0; I < 3; ++I) {
    let d0 = randDigit()
    let d1 = randDigit()

    let ex0 = `${d0}+${d1}`

    console.log(`${ex0} ~> ${net.run(ex0)}`)
}

window.localStorage.setItem('model', JSON.stringify(net.toJSON()))
