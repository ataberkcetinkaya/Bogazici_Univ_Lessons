// let age = 18;

// if (age >= 18) {
//     console.log("Allowed")
// }
// else {
//     console.log("Not allowed")
// }

////////////////////////////////////////////////////////////////////////////////////////////////
let pass = "12578"

if (pass.length >= 8) {
    console.log("Password is OK")
    alert(pass)
} else if (pass.length >= 7) {
    console.log("add 1 more character")
    //alert(pass)
}
else {
    console.log("Check pass reqs again.")
    alert("WARNING !!!")
}