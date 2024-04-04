//case 1
let x = "44"
console.log(typeof(x));     //string

let y = Number(x)
console.log(typeof(y));     //number


//case2
let z = "123abx"
console.log(typeof(z));     //string

let p = Number(z)
console.log(typeof(p));     //number

console.log(p)  // Nan i.e Not a Number

/*
    null changes to 0   
    undefined changes to NaN
    bool changes to 1/0
    string containing only alphabets or special charcter to NaN
 */

let loggedIn = 1
let BooleanLoggedIn = Boolean(loggedIn)

console.log(BooleanLoggedIn);

// 1 => true ; 0 => false
// "ali" => ture ; "" => false
