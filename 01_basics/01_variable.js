const accountId = 711227  // it cann't be changed
let accountEmail = "Prabirkayal@gmail.com"
var accountPass = 28849  // we don't use this var , it has scope issue
accountType = "Savings" 

//method 1 to console data
console.log(accountId)

//method 2 to console data
console.table([accountId,accountEmail,accountPass,accountType])

/*
// e.g-> of const this cann't be changed
accountId = 888888 // it will didn't throw an error
console.log(accountId) // but when it will cosole it will throw an error
*/