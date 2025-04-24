// ************* NUMBER **************
const score = 400

const balance1 = new Number(score)
const balance2 = Number(score)
// console.log(typeof balance)

// console.log(balance1) 
// console.log(balance1.toString())
// console.log(balance1.toFixed(2))  // after (.) how many numbers will show

const anotherNumber = 23.586405
// console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // default USA 
// // console.log(hundreds.toLocaleString('en-IN')) // india 

// // console.log(Number.MAX_VALUE)

// // ****************** MATHS *******************

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.abs(-4))
// console.log(Math.ceil(4.03666))
// console.log(Math.floor(4.903666))

// console.log(Math.min((1,2,4,56,8)))
// console.log(Math.max((1,2,4,56,8)))

// console.log(Math.random())
// console.log((Math.random()*10)+1) // we  don't need 1 , thats why we add (+1)
// console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(min-max+1))+min)
console.log((Math.random((min,max)))+min)