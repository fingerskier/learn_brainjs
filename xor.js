const net = new brain.NeuralNetwork({ hiddenLayer:[1]})

const inputs = [
  [0,0],
  [0,1],
  [1,0],
  [1,1],
]

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

net.train(trainingData, {
  log: (error)=>console.log(error),
  logPeriod: 100,
})

window.onload = ()=>{
  var content = document.getElementById('content')
  
  content.innerText = `
    net.run(inputs[0]) >> ${net.run(inputs[0])}
    net.run(inputs[1]) >> ${net.run(inputs[1])}
    net.run(inputs[2]) >> ${net.run(inputs[2])}
    net.run(inputs[3]) >> ${net.run(inputs[3])}
  `
}