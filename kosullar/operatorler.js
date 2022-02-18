// || veya
// && ve
// ! degildir

let db_user = "admin"
let db_pass = "12345"

let user = "adsmin"
let pass = "123s45"

if (user == db_user && pass == db_pass) {
    console.log("Access granted")
}
// else if (user == db_user || pass == db_pass) {
//     console.log("One of the infos not matching")
// }
else if (user != db_user && pass == db_pass) {
    console.log("User is wrong")
}
else if (user == db_user && pass != db_pass) {
    console.log("Password is wrong")
}
else {
    console.log("Check both credentials")
}