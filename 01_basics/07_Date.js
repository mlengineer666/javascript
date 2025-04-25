// Date (date is object)
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toUTCString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())

//LocaleString
newDate.toLocaleString('default',{
    weekdays:"long",
})