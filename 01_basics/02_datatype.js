"use strict";  // treat all js code as newer version

// alert("hello")  //we ar using node.js ,not browser
console.log(2+4)
console.log("Prabir")


let name = "Prabir" //string datatype
let age = 20 // number type
let isLoggedIn = false //boolean type

/* 
    1. number => 2 to power 53
    2. bigint
    3. sting =>"" or ''
    4. boolean => true/false
    5. null => standalone value
    6. undefined =>

*/

// object
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(null))
// console.log(typeof undefined)  // syntax 2 of typeof


// Primitive dataType
// 7 types => Boolean,Undefined,Null,Number,String,Symbol,BigInt

//Reference type or Non-Primitive => Array,BObjects,Functions

const score = 100
const sc = 100.4

// symbol
const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId)

const bigNumber = 488882348486272734848449493n
console.log(typeof bigNumber)

//Array
const heroes = ['shaktiman','nagaraj','doga'];
//Objects
let myObj = {
    name:"Prabir",
    age:27
}

//basic function
const myFunc = function(){
    console.log("Prabir")
}
console.log(myFunc())

console.log(typeof myFunc)