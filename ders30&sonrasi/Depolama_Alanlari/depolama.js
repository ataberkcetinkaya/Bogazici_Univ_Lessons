// sessionStorage.setItem("selamkey", "ataberkk")
// sessionStorage.setItem("naberkey", "iyikey") //Session Storage in browser - Key, Value
// //Session Storage; browser kapatilip devre disi kaldiginda kaybolur(comment-line olmali).

// localStorage.setItem("selamlocal", "selams") //Local Storage; kalici olur.


//Ders 40---
let add = document.querySelector(".add");
let deletee = document.querySelector(".delete");
let clear = document.querySelector(".clear");

let key = document.querySelector(".key");
let value = document.querySelector(".value");
let sil_ = document.querySelector(".sil_");

add.addEventListener("click", e => {
    sessionStorage.setItem(key.value, value.value)
});

deletee.addEventListener("click", e => {
    sessionStorage.removeItem(sil_.value)
});

clear.addEventListener("click", e => {
    sessionStorage.clear()
}) 