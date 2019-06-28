const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input:{M,T,W,R,F}
// output:{restaurant0, restaurant1, etc...}

const trainingData = []

for (let place in restaurants) {
    const DOW = restaurants[place]

    trainingData.push({
        input: {[DOW]:1},
        output: {[place]:1}
    })
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const stats= net.train(trainingData)

console.log(stats)

console.log(net.run({
    'Monday': 1
}))


function restaurantForDay(DOW) {
    const result = net.run({ [DOW]:1 })

    let highestValue = 0;
    let highestRestaurant = ''

    for (let place in result) {
        if (result[place] > highestValue) {
            highestValue = result[place]
            highestRestaurant = place
        }
    }

    return highestRestaurant
}


console.log(restaurantForDay('Monday'))
console.log(restaurantForDay('Tuesday'))
console.log(restaurantForDay('Wednesday'))
console.log(restaurantForDay('Thursday'))
console.log(restaurantForDay('Friday'))
console.log(restaurantForDay('Saturday'))
console.log(restaurantForDay('Sunday'))

// //

const invertTrainingData = []

for (let place in restaurants) {
    const DOW = restaurants[place]

    invertTrainingData.push({
        output: {[DOW]:1},
        input: {[place]:1}
    })
}

const invertNet = new brain.NeuralNetwork({ hiddenLayers:[3] })
const invertStats = invertNet.train(invertTrainingData)

console.log(invertStats)
console.log(net.run({ 'Brilliant Yellow Corral':1 }))


function dayForRestaurant(place) {
    const result = invertNet.run({ [place]:1 })

    let highestValue = 0;
    let highestDay = ''

    for (let DOW in result) {
        if (result[place] > highestValue) {
            highestValue = result[DOW]
            highestDay = DOW
        }
    }

    return highestDay
}

console.log(dayForRestaurant("Brilliant Yellow Corral"))
console.log(dayForRestaurant("Penny’s"))
console.log(dayForRestaurant("Right Coast Wings"))
console.log(dayForRestaurant("The Delusion Last Railway Car"))
console.log(dayForRestaurant("Fun Day Inn"))
console.log(dayForRestaurant("JHOP"))
console.log(dayForRestaurant("Owls"))
