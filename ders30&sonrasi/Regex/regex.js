let pass = ""

let check = /^.{8,12}$/; //[a-zA-Z0-9] - nokta koymak her şeyi dahil eder

let result = check.test(pass) //.test ile parola kontrolü yaptirilabilir

console.log(result)

if (result == true) {
    console.log("valid")
} else {
    console.log("denied")
}