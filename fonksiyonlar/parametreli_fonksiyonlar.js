// function user_info(name, surname) {
//     console.log(`Name: ${name}, Surname: ${surname}`)
// }

// user_info('ataberk', 'cetinkaya')

///////////////////////////////////////////////////////////////////////////////////////////
// function ustunu_al(sayi, ustu) {
//     let sonuc = sayi ** ustu

//     console.log(`Alt olarak girilen sayi: ${sayi}, ust olarak girilen sayi: ${ustu}, ikisinin sonucu: ${sonuc}`)
// }
// ustunu_al(2,5)

///////////////////////////////////////////////////////////////////////////////////////////
function name_surname(name = "undefined", surname = "undefined") { //deger girilmezse undefined veya baska mesaj
    console.log(name + ' ' + surname)
}
name_surname("ataberk", "cetinkaya")