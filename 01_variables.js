const accountId = 1234
let accountEmail = "ali@gamil.com"
var accountPassword = "1212"
accountCity = "Rampur" // this will work but it is not a good habit

let accountSate

// let us try to change the const variable

// accountId = 098 this is not allowed

accountEmail = "xyxz@bue.com"
accountPassword = "565656"
accountCity = "Moradabad"

console.table([accountEmail, accountPassword, accountCity, accountSate])

/*
    we wont use var keyword because it has issue of block scope
    and fucntional scope
*/