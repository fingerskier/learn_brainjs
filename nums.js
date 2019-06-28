// rawdata = ' # '

function toArray(string) {
    if (string.length !== 7*7) throw new Error('string wrong size')

    return string.split('').map(toNumber)
}

function toNumber(character) {
    return character === '#' ? 1 : 0
}

const zero = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
);
const one = toArray(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   '
);
const two = toArray(
    '#######' +
    '#     #' +
    '      #' +
    '     # ' +
    '   #   ' +
    ' #     ' +
    '#######'
);
  const three = toArray(
    '#######' +
    '      #' +
    '      #' +
    ' ######' +
    '      #' +
    '      #' +
    '#######'
);
const four = toArray(
    '#     #' +
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #'
);
const five = toArray(
    '#######' +
    '#      ' +
    '#      ' +
    '#######' +
    '      #' +
    '      #' +
    '#######'
);
const six = toArray(
    '      #' +
    '    #  ' +
    '  #    ' +
    ' ######' +
    '#     #' +
    '#     #' +
    '#######'
);
const seven = toArray(
    '#######' +
    '     # ' +
    '    #  ' +
    '   #   ' +
    '  #    ' +
    ' #     ' +
    '#      '
);
const eight = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '#     #' +
    '#     #' +
    '#######'
);
const nine = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '###### ' +
    '    #  ' +
    '   #   ' +
    ' #     '
);


console.log(nine)


const net = new brain.NeuralNetwork()

const trainingData = [
    { input: zero, output: {} },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
]

net.train(trainingData, { log: (stats) => console.log(stats) });

var result = net.run(toArray(
'#######' +
'#     #' +
'#     #' +
'#######' +
'#     #' +
'#     #' +
'#######'
))

console.log(result)

result = brain.likely(toArray(
    '  #####' +
    '#     #' +
    '#     #' +
    '###  ##' +
    '#     #' +
    '#     #' +
    '#######'
), net)

console.log(result)

result = brain.likely(toArray(
    '#      ' +
    '#     #' +
    '#     #' +
    '#  ####' +
    '      #' +
    '      #' +
    '      #'
), net)

console.log(result)

result = brain.likely(toArray(
    '# #### ' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '## # ##'
), net)

console.log(result)