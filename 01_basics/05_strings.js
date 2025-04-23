// console.log("hello" + 'hello')
const name = 'prabir'
const repoCount = 100
// console.log(name+repoCount+'value') // outdated methods

console.log(`hello my name is ${name} and my age is ${repoCount}`)// ` this is the back text

// another way to declare string
const gameName = new String('prabir')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))  // to find character in which position

console.log(gameName.indexOf('r'))
console.log(gameName.substring(0,4))

const newString = gameName.slice(-5,4)
const newString2 = gameName.slice(-5,-4)
console.log(gameName)
console.log(newString)
console.log(newString2)

console.log(gameName.replace('p','A'))
const url = 'https://prabir.com/prabir#41kayal'
console.log(url.replace('#41','_'))

console.log(url.includes('prabir'))

// using split we convert into string
const newurl = 'prabir-kayal-'
console.log(newurl.split('-'))