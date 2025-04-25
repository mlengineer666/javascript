 const myArr1 = [1,2,3,4,5]
 const myArr2 = new Array(1,2,3,4,5)
//  console.log(myArr1[1])

 //methods
 myArr1.push(20)
 myArr1.push(9)

//  console.log(myArr1)
//  console.log(myArr1.pop())

// shift and unshift
// unshift is used for pus from front
myArr1.unshift(9)
// console.log(myArr1)
// myArr1.shift()
// myArr1.shift()
// myArr1.shift()

// console.log(myArr1)

// console.log(myArr2.includes(2))
/*console.log(myArr2.indexOf(9)) // if element is not present return -1 */

// // join convert array into string
// const myArr3 = myArr1.join()
// console.log(myArr1)
// console.log(myArr3) // but type is string

// console.log(typeof myArr3)

// Slics and Splice
const myn1 = [1,2,3,4,5,6]
console.log('A',myn1)

// slice => is used to extract some section from original array
console.log(myn1.slice(1,3))//3 index will not included

//splice => is used to replace or remove some section from array
console.log('Extracted part',myn1.splice(1,3))
console.log('After Extraction from original array',myn1)